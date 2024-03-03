import React, { useState, ChangeEvent } from 'react';
import CommentIcon from '../../Components/assets/icons/commentIcon.png';
import DynamicButton from '../common/button';
import SmileIcon from '../../Components/assets/icons/commentComponentIcon/smile.png';
import DocumentIcon from '../../Components/assets/icons/commentComponentIcon/document.png';
import ShareIcon from '../../Components/assets/icons/commentComponentIcon/share.png';
import EmailIcon from '../../Components/assets/icons/commentComponentIcon/email.png';

function Comment() {
  const [comment, setComment] = useState<string>('');
  const [textareaHeight, setTextareaHeight] = useState<string>('67px');
  const [isTextareaClicked, setIsTextareaClicked] = useState<boolean>(false);

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setComment(event.target.value);
  };

  const handleTextareaFocus = () => {
    setTextareaHeight('209px');
    setIsTextareaClicked(true);
  };

  const handleTextareaBlur = () => {
    if (comment.trim() === '') {
      setTextareaHeight('67px');
    }
  };

  return (
    <div className='relative'>
      <img src={CommentIcon} alt="CommentIcon" style={{ position: 'absolute', top: '8px', left: '8px', width: '24px', height: '24px' }} />
      <div className="comment-container">
        <textarea
          className="w-[660px] pl-8 border border-gray-300 rounded p-2"
          value={comment}
          onChange={handleChange}
          onFocus={handleTextareaFocus}
          onBlur={handleTextareaBlur}
          placeholder="کامنت شما"
          dir="rtl"
          style={{ height: textareaHeight }}
        />
        {isTextareaClicked && (
          <div className='flex w-[660px] h-[60px] justify-between items-center absolute bottom-0 p-4'>
            <DynamicButton
              text="ثبت کامنت"
              width={82}
              height={29}
              onClick={() => {console.log("hello")}}
              fontSize="12px"
              fontWeight={800}
              borderRadius={6}
            />
            <div className='flex'>
              <img src={SmileIcon} alt="SmileIcon" className='cursor-pointer mr-4 w-[24px] h-[24px]'/>
              <img src={DocumentIcon} alt="DocumentIcon" className='cursor-pointer mr-4 w-[24px] h-[24px]'/>
              <img src={ShareIcon} alt="ShareIcon" className='cursor-pointer mr-4 w-[24px] h-[24px]'/>
              <img src={EmailIcon} alt="EmailIcon" className='cursor-pointer w-[24px] h-[24px]'/>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Comment;
