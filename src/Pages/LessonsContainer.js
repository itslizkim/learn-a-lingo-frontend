import React from 'react';
import Lesson from '../Components/Lesson';
import { useSelector } from 'react-redux';
import {Card} from 'semantic-ui-react'


const LessonContainer = () => {

    const lessons = useSelector(state => state.lessons)

    const renderLessons = (lessonsArr) => {
        return !lessonsArr.length ? null : lessonsArr.map(lesson =>
    
            <Lesson
                key={lesson.id}
                lesson={lesson}
            />
        )
        
    }

    return (
        console.log(lessons),
        <Card.Group itemsPerRow={3}>
            {renderLessons(lessons)}
        </Card.Group>
    )


}; export default LessonContainer;



