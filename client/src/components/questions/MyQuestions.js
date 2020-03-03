import React from 'react';
import { Redirect } from 'react-router-dom';
import QuestionCard from '../partials/QuestionCard';
import SidebarUser from '../partials/SidebarUser';
import Pagination from '../partials/Pagination';

const Questions = props => {
  if (!props.auth) {
    return <Redirect to="/login" />;
  }

  return (
    <div className="row mt-2">
      <div className="col s12">
        <h3 className="text-grey-color center">
          You are curious which is a good thing!
        </h3>
      </div>
      <div className="col s3 mt-1">
        <SidebarUser />
      </div>
      <div className="col s9 mt-1">
        <QuestionCard />
        <QuestionCard />
        <QuestionCard />
        <QuestionCard />
        <QuestionCard />
        <Pagination />
      </div>
    </div>
  );
};

export default Questions;
