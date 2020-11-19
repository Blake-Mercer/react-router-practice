import React, { Component } from 'react';
import classes from './Courses.module.css';
import { Link, Route } from 'react-router-dom';
import Course from '../Course/Course';

class Courses extends Component {
  state = {
    courses: [
      {
        id: 1,
        title: 'Modern JavaScript Hero',
      },
      {
        id: 2,
        title: 'How to Master Routing',
      },
      {
        id: 3,
        title: 'Get a job being smart',
      },
    ],
  };

  render() {
    return (
      <div>
        <h1>Amazing Udemy Courses</h1>
        <section className={classes.Courses}>
          {this.state.courses.map((course) => {
            return (
              <Link
                key={course.id}
                to={{
                  pathname: this.props.match.url + '/' + course.id,
                  search: '?title=' + course.title,
                }}>
                <article className={classes.Course}>{course.title}</article>
              </Link>
            );
          })}
        </section>
        <Route path={this.props.match.url + '/:courseId'} component={Course} />
      </div>
    );
  }
}

export default Courses;
