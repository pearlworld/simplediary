import { useState } from "react";

const DiaryItem = ({
  onRemove,
  author,
  content,
  created_date,
  emotion,
  id,
}) => {
  const [isEdit, setEdit] = useState(false);
  const tiggleIsEdit = () => setEdit(!isEdit);

  const [localContent, setLocalContent] = useState(content);

  const handleRemove = () => {
    if (window.confirm(`${id + 1}번째 일기를 삭제하시겠습니까?`)) {
      onRemove(id);
    }
  };

  const handleQuitEdit = () => {
    setEdit(false);
    setLocalContent(content);
  };

  const onEdit = (targetId, newContent) => {
    setData(
      data.map((it) =>
        it.id === targetId ? { ...it, content: newContent } : it
      )
    );
  };

  return (
    <div className="item__inner">
      <div className="item__top">
        <p className="item__num">{id + 1}번째 일기</p>
        <p className="item__date">{new Date(created_date).toLocaleString()}</p>
      </div>
      <div className="item__bottom">
        <p className="item__author">제목 : {author}</p>
        <p className="item__content">
          {isEdit ? (
            <>
              <textarea
                value={localContent}
                onChange={(e) => setLocalContent(e.target.value)}
              ></textarea>
            </>
          ) : (
            <>{content}</>
          )}
        </p>
        <p className="item__emotion">감정 점수 : {emotion}</p>
      </div>
      <div className="item__btn">
        {isEdit ? (
          <>
            <button className="btn_type--1" onClick={handleQuitEdit}>
              취소
            </button>
            <button className="btn_type--2" onClick={() => {}}>
              저장
            </button>
          </>
        ) : (
          <>
            <button className="btn_type--1" onClick={tiggleIsEdit}>
              수정
            </button>
            <button className="btn_type--2" onClick={handleRemove}>
              삭제
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default DiaryItem;
