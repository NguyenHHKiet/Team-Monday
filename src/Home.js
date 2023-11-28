import React, { useState, useRef } from 'react';
import './Home.css';
import { useLanguage } from './Languagecontext';
import MBTICard from './MBTICard';

const Home = () => {
 
  const mbtiTypeRef = useRef(null);

  const handleScrollToMBTIType = () => {
    mbtiTypeRef.current.scrollIntoView({ behavior: 'smooth' });
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
      case 'ko':
        return {
          title: 'MBTI',
          startButton: '시작',
          languageButton: '언어',
          selectLanguage: '언어를 선택하세요',
          mbtiType: 'MBTI 유형'
        };
      case 'vn':
        return {
          title: 'MBTI',
          startButton: 'BẮT ĐẦU',
          languageButton: 'Ngôn ngữ',
          selectLanguage: 'Chọn ngôn ngữ',
          mbtiType: 'loại MBTI'
        };
      default:
        return {
          title: 'MBTI',
          startButton: 'START',
          languageButton: 'Language',
          selectLanguage: 'Select a language',
          mbtiType: 'MBTI TYPE'
        };
    }
  };
  const [selectedMBTI, setSelectedMBTI] = useState(null);

  const mbtiTypes = [  
    {
      type: 'INFP',
      image: '/image/INFP.png',
      description: {
        ko: '차분하고 창의적이며 낭만적인 성향으로 보이지만 내면은 내적신념이 깊은 열정적인 중재자 유형.',
        vn: 'Là kiểu người hòa giải nhiệt huyết, có vẻ ngoài điềm tĩnh, sáng tạo và lãng mạn nhưng có niềm tin nội tâm sâu sắc.',
        en: 'A type of passionate mediator who appears calm, creative, and romantic but has deep inner beliefs.',
      },
    },

    {
      type: 'ENFP',
      image: '/image/.png',
      description: {
        ko: '규칙을 따르는 믿을 수 있는 사람',
        vn: 'Người đáng tin cậy tuân thủ các quy tắc',
        en: 'Reliable person who follows the rules',
      },
    },
    
    {
      type: 'ESFJ',
      image: '/image/.png',
      description: {
        ko: '규칙을 따르는 믿을 수 있는 사람',
        vn: 'Người đáng tin cậy tuân thủ các quy tắc',
        en: 'Reliable person who follows the rules',
      },
    },
    
    {
      type: 'ISFJ',
      image: '/image/.png',
      description: {
        ko: '규칙을 따르는 믿을 수 있는 사람',
        vn: 'Người đáng tin cậy tuân thủ các quy tắc',
        en: 'Reliable person who follows the rules',
      },
    },
    
    {
      type: 'ISFP',
      image: '/image/.png',
      description: {
        ko: '규칙을 따르는 믿을 수 있는 사람',
        vn: 'Người đáng tin cậy tuân thủ các quy tắc',
        en: 'Reliable person who follows the rules',
      },
    },
    
    {
      type: 'ESFP',
      image: '/image/.png',
      description: {
        ko: '규칙을 따르는 믿을 수 있는 사람',
        vn: 'Người đáng tin cậy tuân thủ các quy tắc',
        en: 'Reliable person who follows the rules',
      },
    },
    
    {
      type: 'INTP',
      image: '/image/.png',
      description: {
        ko: '규칙을 따르는 믿을 수 있는 사람',
        vn: 'Người đáng tin cậy tuân thủ các quy tắc',
        en: 'Reliable person who follows the rules',
      },
    },
    
    {
      type: 'INFJ',
      image: '/image/.png',
      description: {
        ko: '규칙을 따르는 믿을 수 있는 사람',
        vn: 'Người đáng tin cậy tuân thủ các quy tắc',
        en: 'Reliable person who follows the rules',
      },
    },
    
    {
      type: 'ENFJ',
      image: '/image/.png',
      description: {
        ko: '규칙을 따르는 믿을 수 있는 사람',
        vn: 'Người đáng tin cậy tuân thủ các quy tắc',
        en: 'Reliable person who follows the rules',
      },
    },
    
    {
      type: 'ENTP',
      image: '/image/.png',
      description: {
        ko: '규칙을 따르는 믿을 수 있는 사람',
        vn: 'Người đáng tin cậy tuân thủ các quy tắc',
        en: 'Reliable person who follows the rules',
      },
    },
    
    {
      type: 'ESTJ',
      image: '/image/.png',
      description: {
        ko: '규칙을 따르는 믿을 수 있는 사람',
        vn: 'Người đáng tin cậy tuân thủ các quy tắc',
        en: 'Reliable person who follows the rules',
      },
    },
    
    {
      type: 'ISTJ',
      image: '/image/.png',
      description: {
        ko: '규칙을 따르는 믿을 수 있는 사람',
        vn: 'Người đáng tin cậy tuân thủ các quy tắc',
        en: 'Reliable person who follows the rules',
      },
    },
    
    {
      type: 'INTJ',
      image: '/image/.png',
      description: {
        ko: '규칙을 따르는 믿을 수 있는 사람',
        vn: 'Người đáng tin cậy tuân thủ các quy tắc',
        en: 'Reliable person who follows the rules',
      },
    },
    
    {
      type: 'ISTP',
      image: '/image/.png',
      description: {
        ko: '규칙을 따르는 믿을 수 있는 사람',
        vn: 'Người đáng tin cậy tuân thủ các quy tắc',
        en: 'Reliable person who follows the rules',
      },
    },
    
    {
      type: 'ESTP',
      image: '/image/.png',
      description: {
        ko: '규칙을 따르는 믿을 수 있는 사람',
        vn: 'Người đáng tin cậy tuân thủ các quy tắc',
        en: 'Reliable person who follows the rules',
      },
    },
    
    {
      type: 'ENTJ',
      image: '/image/.png',
      description: {
        ko: '규칙을 따르는 믿을 수 있는 사람',
        vn: 'Người đáng tin cậy tuân thủ các quy tắc',
        en: 'Reliable person who follows the rules',
      },
    },
  ];


  const handleMBTICardClick = (type) => {
    setSelectedMBTI(type);
  };

  const text = getTextByLanguage();

  return (
    <div style={{ textAlign: 'center' }}>
      <div className='navbar'>
        <button className='navbar-button' onClick={handleScrollToMBTIType}>{text.mbtiType}</button>
        <button className='navbar-button' onClick={handleLanguageButtonClick}>
          {text.languageButton}
        </button>
      </div>
      <h1 className='title'>{text.title}</h1>
      <div className='home-container'>
        <button className='start-button'>{text.startButton}</button>

        <div ref={mbtiTypeRef} className='mbti-type'> MBTI TYPE</div>
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
            image={mbtiTypes.find((mbti) => mbti.type === selectedMBTI)?.image}
            description={
              mbtiTypes.find((mbti) => mbti.type === selectedMBTI)?.description[selectedLanguage]
            }
          />
        )}
        

        {isModalOpen && (
          <div className='modal-overlay'>
            <div className='modal'>
              <button className='close-button' onClick={handleModalCloseButtonClick}>
                X
              </button>
              <p>{text.selectLanguage}</p>
              <img
                className="select"
                src='/image/korea.png'
                onClick={() => {
                  handleLanguageSelect('ko');
                  handleCloseModal();
                }}
                alt="Korea"
              />
              <img
                className="select"
                src='/image/vietnam.png'
                onClick={() => {
                  handleLanguageSelect('vn');
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
