import React from "react";

const BannerItem = ({ showStudentPart = true, showTeacherPart = true }) => {
  const renderStudentPart = () => {
    if (!showStudentPart) return null;

    return (
      <>
        <i className="student-icon"></i>
        <img className="student-image" />
      </>
    );
  };

  const renderTeacherPart = () => {
    if (!showTeacherPart) return null;

    return (
      <>
        <i className="teacher-icon"></i>
        <img className="teacher-image" />
      </>
    );
  };

  return (
    <li>
      <div>
        <h2>Banner 1</h2>
        <p>
          <span>
            {renderStudentPart()}
            {renderTeacherPart()}
          </span>
        </p>
      </div>
    </li>
  );
};

export default BannerItem;
