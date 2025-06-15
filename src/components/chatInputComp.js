import React, { useState, useRef } from 'react';

// 引入图标库，例如 react-icons
import { FiPlus, FiMic, FiUpload } from 'react-icons/fi'; // 示例图标，您可能需要根据实际图标替换
import { TbWorldSearch } from "react-icons/tb";
import { FaBrain } from "react-icons/fa";

const ChatInput = () => {
  const [inputValue, setInputValue] = useState('');
  const fileInputRef = useRef(null); // 用于文件上传的ref

  // 开启思考 (Deep Research) 按钮点击事件
  const handleDeepResearchClick = () => {
    alert('开启思考 (Deep Research) 功能待实现！');
    // 在这里可以触发深度思考的逻辑，例如调用API
  };

  // Canvas 按钮点击事件
  const handleCanvasClick = () => {
    alert('Canvas 功能待实现！');
    // 在这里可以触发Canvas的逻辑
  };

  // 上传文件按钮点击事件
  const handleFileUploadClick = () => {
    fileInputRef.current.click(); // 触发文件输入框点击
  };

  // 文件选择事件
  const handleFileChange = (event) => {
    const files = event.target.files;
    if (files.length > 0) {
      alert(`已选择文件: ${files[0].name}`);
      // 在这里处理文件上传逻辑，例如使用FormData和fetch API上传
    }
  };

  // 语音按钮点击事件 (禁用状态)
  const handleVoiceClick = () => {
    alert('抱歉，语音功能暂时不支持。');
  };

  // 输入框内容改变事件
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  // 模拟发送消息 (Enter 键)
  const handleKeyDown = (event) => {
    if (event.key === 'Enter' && inputValue.trim() !== '') {
      alert(`发送消息: ${inputValue}`);
      setInputValue(''); // 清空输入框
    }
  };

  return (
    <div className="box">
        <div className='level is-hidden-mobile'>
            <div className='level-left'>
                <span className=''>
                    回答未必正确无误，请仔细核查
                </span>
            </div>
            <div className='level-right'>
                <div className='button is-small '>
                    按钮
                </div>
            </div>
        </div>
      <form className="field">
        <div className='control'>

          <textarea 
            type="textarea"
            className="textarea"
            placeholder="问一问 "
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            />
            </div>
       
      </form>
        <div className='level'>
            <div className='level-left'>
                <div className="buttons">
          <button className="button" onClick={() => alert('添加按钮点击')}>
            <FiPlus size={24} />
          </button>
          <button className="button" onClick={handleDeepResearchClick}>
            <span className='icon'>
                <TbWorldSearch size={24} /> 
            </span>
            <span className='is-hidden-mobile'>
                搜索
            </span>
          </button>
          <button className="button" onClick={handleCanvasClick}>
            <span className='icon'>
                <FaBrain size={24} /> 
            </span>
            <span className='is-hidden-mobile'>
                开启思考
            </span>
          </button>
          {/* 上传文件按钮 */}
          <button className="button" onClick={handleFileUploadClick}>
                <span  className='icon'>
                    <FiUpload size={24} /> 
                </span>
                <span className='is-hidden-mobile'>
                    上传文件
                </span>
          </button>
          <input
            className='file-input'
            type="file"
            ref={fileInputRef}
            style={{ display: 'none' }} // 隐藏实际的文件输入框
            onChange={handleFileChange}
          />
         
        </div>
            </div>
            <div className='level-right'>
                 {/* 语音按钮，暂时不支持 */}
          <button className="button" onClick={handleVoiceClick} disabled>
            <span className='icon'>
                <FiMic size={24} />
            </span>
          </button>
            </div>
        </div>
       
      
    </div>
  );
};

export default ChatInput;