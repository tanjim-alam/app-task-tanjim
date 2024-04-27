import React, { useEffect, useState } from "react";
import "../productSection/product.css"
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import useGetProduct from "../../hooks/useGetProduct";
import ProductCard from "../productCard/ProductCard";
import productData from "../../constants/productData";
import Accordion from "../accordion/Accordion";
const Products = () => {
    const [toggle, setToggle] = useState(false);
    const [filter, setFilter] = useState("SHOW FILTER");
    const [zIndex, setZIndex] = useState("");
    const [adjuststyle, setAdjustStyle] = useState("products");
    const idealForList = ["IDEAL FOR", ["Men", "Women", "Baby & Kids"]]
    const occasionList = ["OCCASION", ["Men", "Women", "Baby & Kids"]];
    const workList = ["WORK", ["Men", "Women", "Baby & Kids"]];
    const fabricList = ["FABRIC", ["Men", "Women", "Baby & Kids"]];
    const segmentList = ["SEGMENT", ["Men", "Women", "Baby & Kids"]];
    const suitableForList = ["SUITABLE FOR", ["Men", "Women", "Baby & Kids"]];
    const rawMaterialsList = ["RAW MATERIALS", ["Men", "Women", "Baby & Kids"]];
    const pattertList = ["PATTERT", ["Men", "Women", "Baby & Kids"]];

    function handleFilterVisibility() {
        toggle ? setToggle(false) : setToggle(true);
        !toggle ? setFilter("HIDE FILTER") : setFilter("SHOW FILTER");
        !toggle ? setAdjustStyle("products width75") : setAdjustStyle("products");
    };


    function handleZindex() {
        toggle ? setToggle(false) : setToggle(true);
        toggle ? setZIndex("zIndex2") : setZIndex("");
        !toggle ? setAdjustStyle("products width75") : setAdjustStyle("products");
    };
    // const api = "https://fakestoreapi.com/products"
    // const { dataList, loading, error } = useGetProduct(api);
    // console.log(dataList, loading, error)

    const [productFilter, setProductFilter] = useState('');
    const [filteredDataList, setFilteredDataList] = useState(productData);

    useEffect(() => {
        console.log(productFilter)
        if (productFilter === 'lowToHigh') {
            const sortedDataList = productData.sort((a, b) => a.price - b.price);
            setFilteredDataList([...sortedDataList]);

        } else if (productFilter === 'highToLow') {
            const sortedDataList = productData.sort((a, b) => b.price - a.price);
            setFilteredDataList([...sortedDataList]);
        }
        else if (productFilter === 'Recommended') {
            setFilteredDataList([...productData]);
        }
        else {
            setFilteredDataList(productData);
        }
    }, [productFilter, productData]);

    const handleFilterChange = (event) => {
        setProductFilter(event.target.value);
    };

    const [categoryName, setCategoryName] = useState("");

    useEffect(() => {
        if (categoryName) {
            const filterData = productData.filter((data) => data.category == categoryName);
            setFilteredDataList([...filterData])
        }
        else {
            setFilteredDataList(productData);
        }
    }, [categoryName, productData])
    function handleFilterChangeByCategory(cate) {
        if (cate !== categoryName) {
            setCategoryName(cate);
        }
        else {
            setCategoryName("")
        }
    }
    return (
        <>
            <section className="filterContainer">
                <div className="showfilter">
                    <span className="qty">3425 ITEMS</span>
                    <div className="hidefilterBox" onClick={handleFilterVisibility}>
                        <div className="iconBox">
                            <button>{toggle ? <IoIosArrowBack /> : <IoIosArrowForward />}</button>
                        </div>
                        <span className="filterBtn">{filter}</span>
                    </div>
                </div>
                <span className="filterlogo" onClick={handleZindex}>
                    FILTER
                </span>
                <span className="sort">
                    <div className="txt ">
                        <select name="" id="select" onChange={handleFilterChange}>
                            <option value="Recommended" style={{ marginTop: "10px" }}> RECOMMENDED</option>
                            <option value="Newest first"> NEWEST FIRST</option>
                            <option value="Popular"> POPULAR</option>
                            <option value="highToLow">
                                {" "}
                                PRICE : HIGH TO LOW
                            </option>
                            <option value="lowToHigh">
                                {" "}
                                PRICE : LOW TO HIGH
                            </option>
                        </select>
                    </div>{" "}
                </span>
            </section>
            <section className="secondFilterContainer">
                {toggle ? (
                    <aside id="filter" className={zIndex}>
                        <div className="costomize">
                            <input type="checkbox" />
                            <p>CUSTOMIZABLE</p>
                        </div>
                        <div className="type productsAccordionBox">
                            <Accordion handleFilterChangeByCategory={handleFilterChangeByCategory} title={idealForList[0]} contents={idealForList[1]} />
                        </div>
                        <div className="occasion productsAccordionBox">
                            <Accordion title={occasionList[0]} contents={occasionList[1]} />
                        </div>
                        <div className="work productsAccordionBox">
                            <Accordion title={workList[0]} contents={workList[1]} />
                        </div>
                        <div className="fabric productsAccordionBox">
                            <Accordion title={fabricList[0]} contents={fabricList[1]} />
                        </div>
                        <div className="segment productsAccordionBox">
                            <Accordion title={segmentList[0]} contents={segmentList[1]} />
                        </div>
                        <div className="suitablefor productsAccordionBox">
                            <Accordion title={suitableForList[0]} contents={suitableForList[1]} />
                        </div>
                        <div className="raw productsAccordionBox">
                            <Accordion title={rawMaterialsList[0]} contents={rawMaterialsList[1]} />
                        </div>
                        <div className="pattert productsAccordionBox">
                            <Accordion title={pattertList[0]} contents={pattertList[1]} />
                        </div>
                    </aside>
                ) : (
                    ""
                )}
                <section className={adjuststyle} >
                    {filteredDataList.map((p, i) => <ProductCard key={i} id={p.id} title={p.name} description={p.desc} image={p.img} />)}
                </section>
            </section>
        </>
    );
};

export default Products;