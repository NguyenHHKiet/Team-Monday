import React, { useState, useRef } from "react";
import "./Home.css";
import { useLanguage } from "./Languagecontext";
import MBTICard from "./MBTICard";
import { useNavigate } from "react-router-dom";
import mbtiTypes from "./assets/mbtiTypes";

const Home = () => {
    const mbtiTypeRef = useRef(null);
    const navigate = useNavigate();

    const handleScrollToMBTIType = () => {
        mbtiTypeRef.current.scrollIntoView({ behavior: "smooth" });
    };

    const [isModalOpen, setModalOpen] = useState(false);
    const { selectedLanguage, handleLanguageSelect } = useLanguage();

    const handleLanguageButtonClick = () => {
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };

    const handleModalCloseButtonClick = () => {
        handleCloseModal();
    };

    const getTextByLanguage = () => {
        switch (selectedLanguage) {
            case "ko":
                return {
                    title: "MBTI",
                    startButton: "시작",
                    languageButton: "언어",
                    selectLanguage: "언어를 선택하세요",
                    mbtiType: "MBTI 유형",
                };
            case "vn":
                return {
                    title: "MBTI",
                    startButton: "BẮT ĐẦU",
                    languageButton: "Ngôn ngữ",
                    selectLanguage: "Chọn ngôn ngữ",
                    mbtiType: "loại MBTI",
                };
            default:
                return {
                    title: "MBTI",
                    startButton: "START",
                    languageButton: "Language",
                    selectLanguage: "Select a language",
                    mbtiType: "MBTI TYPE",
                };
        }
    };
    const [selectedMBTI, setSelectedMBTI] = useState(null);

    const handleMBTICardClick = (type) => {
        setSelectedMBTI(type);
    };

    const text = getTextByLanguage();

    return (
        <div style={{ textAlign: "center" }}>
            <div className="navbar">
                <button
                    className="navbar-button"
                    onClick={handleScrollToMBTIType}>
                    {text.mbtiType}
                </button>
                <button
                    className="navbar-button"
                    onClick={handleLanguageButtonClick}>
                    {text.languageButton}
                </button>
            </div>
            <h1 className="title">{text.title}</h1>
            <div className="home-container">
                <button
                    className="start-button"
                    onClick={() => navigate("/test")}>
                    {text.startButton}
                </button>

                <div ref={mbtiTypeRef} className="mbti-type">
                    {" "}
                    MBTI TYPE
                </div>
                {mbtiTypes.map((mbti) => (
                    <MBTICard
                        key={mbti.type}
                        type={mbti.type}
                        image={mbti.image}
                        description={mbti.description[selectedLanguage]}
                        onClick={() => handleMBTICardClick(mbti.type)}
                    />
                ))}

                {selectedMBTI && (
                    <MBTICard
                        type={selectedMBTI}
                        image={
                            mbtiTypes.find((mbti) => mbti.type === selectedMBTI)
                                ?.image
                        }
                        description={
                            mbtiTypes.find((mbti) => mbti.type === selectedMBTI)
                                ?.description[selectedLanguage]
                        }
                    />
                )}

                {isModalOpen && (
                    <div className="modal-overlay">
                        <div className="modal">
                            <button
                                className="close-button"
                                onClick={handleModalCloseButtonClick}>
                                X
                            </button>
                            <p>{text.selectLanguage}</p>
                            <img
                                className="select"
                                src="/image/korea.png"
                                onClick={() => {
                                    handleLanguageSelect("ko");
                                    handleCloseModal();
                                }}
                                alt="Korea"
                            />
                            <img
                                className="select"
                                src="/image/vietnam.png"
                                onClick={() => {
                                    handleLanguageSelect("vn");
                                    handleCloseModal();
                                }}
                                alt="Vietnam"
                            />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Home;
