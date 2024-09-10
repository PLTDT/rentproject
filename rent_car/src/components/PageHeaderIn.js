import React ,{useState}from "react";
import { useNavigate, Link } from "react-router-dom";
import pheader from "../styles/PageHeader.module.css";

const PageHeaderIn = () => {
    const navigate = useNavigate();
    const [isNavOpen, setIsNavOpen] = useState(false);

    // 從 localStorage 中取得用戶資訊
    const user = JSON.parse(localStorage.getItem('user'));

    const handleLogout = () => {
        // 清除登入狀態
        localStorage.removeItem('token');
        localStorage.removeItem('user'); // 移除用戶資訊
        alert("登出成功");
        navigate("/HomePage");
    };
    const toggleNav = () => {
        setIsNavOpen(!isNavOpen); // 切換漢堡選單狀態
        console.log("isNavOpen:", !isNavOpen); // Check state changes
    };

    return (
        <header className={pheader.header}>
            <div className={pheader.banner}>
                <Link to="/HomePageIn">
                    <img
                        src={require("../assets/logo.png")}
                        alt="背景圖"
                        className={pheader.logo}
                    />
                </Link>
                <div>
                    <button className={pheader.hamburger} onClick={toggleNav}>
                        <div className={pheader.line}></div>
                        <div className={pheader.line}></div>
                        <div className={pheader.line}></div>
                    </button>
                </div>
                <div className={pheader.navbar}>
                    <ul>
                        <li className={pheader.menu}>
                            <Link to="/HomePageIn">首頁</Link>
                        </li>
                        <li className={pheader.menu}>
                            <Link to="/AboutIn">關於我們</Link>
                        </li>
                        <li className={pheader.menu}>
                            <Link to="/Rent">租車服務</Link>
                        </li>
                        <li className={pheader.menu}>
                            <Link to="/MemberInfoPage">會員資料</Link>
                        </li>
                        <li className={pheader.menu}>
                            <Link to="/RentHistory">訂單紀錄</Link>
                        </li>
                        <li className={pheader.menu}>
                            <Link to="/CarMenuIn">車款介紹</Link> {/* 使用 `#` 來處理空鏈接 */}
                        </li>
                        <li className={pheader.menu}>
                            <Link to="/ServiceAddressPageIn">服務據點</Link> {/* 使用 `#` 來處理空鏈接 */}
                        </li>
                    </ul>
                    <div className={pheader.welcome}>
                    {user && (
                                <span className={pheader.username}>歡迎 ~ {user.employeename}</span>
                            )}
                    </div>       
                    <div className={pheader.signbtdiv}>
                        <div className={pheader.signdiv}>
                            <button
                                className={pheader.signbt}
                                onClick={handleLogout}
                            >
                                <span className={pheader.sisp}></span>
                                登出
                            </button>
                        </div>
                    </div>
                </div>
                <div className={pheader.hamcontainer}>
                        {isNavOpen ? (
                            
                                <ul>
                                    <li className={pheader.hammenu}>
                                        <Link to="/HomePageIn" className={pheader.hamlink}>首頁</Link>
                                    </li>
                                    <li className={pheader.hammenu}>
                                        <Link to="/AboutIn" className={pheader.hamlink}>關於我們</Link>
                                    </li>
                                    <li className={pheader.hammenu}>
                                        <Link to="/Rent"  className={pheader.hamlink}>租車服務</Link>
                                    </li>
                                    <li className={pheader.hammenu}>
                                        <Link to="/MemberInfoPage"  className={pheader.hamlink}>會員資料</Link>
                                    </li>
                                    <li className={pheader.hammenu}>
                                        <Link to="/RentHistory"  className={pheader.hamlink}>訂單紀錄</Link>
                                    </li>
                                    <li className={pheader.hammenu}>
                                        <Link to="/CarMenuIn" className={pheader.hamlink}>車款介紹</Link>
                                    </li>
                                    <li className={pheader.hammenu}>
                                        <Link to="/ServiceAddressPageIn" className={pheader.hamlink}>服務據點</Link>
                                    </li>
                                    <button className={pheader.hamsignbt} onClick={handleLogout}>
                                        登出
                                    </button>
                                </ul>
                        ) : null}
                    </div>
            </div>
        </header>
    );
};

export default PageHeaderIn;
