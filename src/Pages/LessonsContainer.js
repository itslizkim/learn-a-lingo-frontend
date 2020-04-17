import React from 'react';
import Lesson from '../Components/Lesson';
import { useSelector } from 'react-redux';
import {Card} from 'semantic-ui-react'


const LessonContainer = () => {

    const lessons = useSelector(state => state.lessons)

    const lessonArr = lessons.map(lesson => {
        return <Lesson
        key={lesson.id}
        lesson={lesson}
        />
    })

    return (
        console.log(lessons),
        <Card.Group className="cards" itemsPerRow={3}>
            {lessonArr}
        </Card.Group>
    )


}; export default LessonContainer;



