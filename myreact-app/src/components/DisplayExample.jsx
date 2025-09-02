import React from 'react';
import UserCard from './UserCard';
import TodoListsun from './TodoListSun';
import TodoListmon from './TodoListMon';
import TodoListtue from './TodoListTue';
import TodoListwed from './TodoListWed';
import TodoListhurs from './TodoListThurs';
import TodoListfri from './TodoListFri';
import TodoListsat from './TodoListSat';

function Displayexample() {
    return (
        <div style={{
            maxWidth: '800px',
            margin: '0 auto',
            padding: '20px',
            fontFamily: 'Arial, sans-serif'
        }}>

            {/* Week5-Assignment Section */}
            <section style={{
                marginBottom: '40px',
                padding: '20px',
                border: '1px solid #eee',
                borderRadius: '8px',
                backgroundColor: '#F2BAF0'
            }}>
                <h2 style={{ color: '#bc7fa3ff', marginBottom: '20px' }}>
                    Week5-Assignment
                </h2>
                <UserCard />
            </section>

            {/* To Do Lists Section Sunday */}
            <section style={{
                marginBottom: '40px',
                padding: '20px',
                border: '1px solid #eee',
                borderRadius: '8px',
                backgroundImage: 'linear-gradient(to bottom, #f496cb, #f59dc9, #f5a3c7, #f5aac7, #f4b1c7, #f3acc2, #f2a6be, #f1a1b9, #f08ead, #ed7aa1, #ea6595, #e74d8a)'
            }}>
                <h2 style={{ color: '#f7f3f3ff', textShadow: '1px 1px 2px rgba(0,0,0,0.3)', marginBottom: '20px' }}>
                    To Do Lists Sunday
                </h2>
                <TodoListsun />
            </section>

            {/* To Do Lists Section Monday */}
            <section style={{
                marginBottom: '40px',
                padding: '20px',
                border: '1px solid #eee',
                borderRadius: '8px',
                backgroundImage: 'linear-gradient(to bottom,#dcee82, #e0ef8d, #e3ef97, #e6f0a2, #e9f1ac, #eaf1a9, #eaf2a6, #ebf2a3, #e9f291, #e7f17f, #e5f16c, #e3f057)'
            }}>
                <h2 style={{ color: '#f7f3f3ff', textShadow: '1px 1px 2px rgba(0,0,0,0.3)', marginBottom: '20px' }}>
                    To Do Lists Monday
                </h2>
                <TodoListmon />
            </section>

            {/* To Do Lists Section Tuesday */}
            <section style={{
                marginBottom: '40px',
                padding: '20px',
                border: '1px solid #eee',
                borderRadius: '8px',
                backgroundImage: 'linear-gradient(to bottom, #ff96c4, #fd9ece, #fca7d7, #faafdf, #f8b7e6, #f7b7e8, #f6b6ea, #f5b6ec, #f4ade9, #f3a4e6, #f19be3, #f092e0)'
            }}>
                <h2 style={{ color: '#f7f3f3ff', textShadow: '1px 1px 2px rgba(0,0,0,0.3)', marginBottom: '20px' }}>
                    To Do List Tuesday
                </h2>
                <TodoListtue />
            </section>

            {/* To Do Lists Section Wednesday*/}
            <section style={{
                marginBottom: '40px',
                padding: '20px',
                border: '1px solid #eee',
                borderRadius: '8px',
                backgroundImage: 'linear-gradient(to bottom, #96ffb1, #9efeb8, #a7fcbe, #affbc4, #b7f9ca, #b3f4c5, #b0efc1, #aceabc, #9ce1ab, #8dd899, #7fcf87, #71c675)'
            }}>
                <h2 style={{ color: '#f7f3f3ff', textShadow: '1px 1px 2px rgba(0,0,0,0.3)', marginBottom: '20px' }}>
                    To Do List Wednesday
                </h2>
                <TodoListwed />
            </section>

            {/* To Do Lists Section Thursday*/}
            <section style={{
                marginBottom: '40px',
                padding: '20px',
                border: '1px solid #eee',
                borderRadius: '8px',
                backgroundImage: 'linear-gradient(to bottom, #f0c26e, #f0cb7d, #f0d48c, #f1dd9c, #f3e5ac, #f3e5ac, #f2e4ab, #f2e4ab, #f0dc9a, #eed489, #eccb79, #ebc268)'
            }}>
                <h2 style={{ color: '#f7f3f3ff', textShadow: '1px 1px 2px rgba(0,0,0,0.3)', marginBottom: '20px' }}>
                    To Do List Thursday
                </h2>
                <TodoListhurs />
            </section>

            {/* To Do Lists Section Friday*/}
            <section style={{
                marginBottom: '40px',
                padding: '20px',
                border: '1px solid #eee',
                borderRadius: '8px',
                backgroundImage: 'linear-gradient(to bottom, #6ebdf0, #77c9f1, #85d4f2, #96def2, #a8e8f3, #aaebf4, #aceff4, #aff2f4, #9ff0f2, #8feff0, #7dedee, #68ebeb)'
            }}>
                <h2 style={{ color: '#f7f3f3ff', textShadow: '1px 1px 2px rgba(0,0,0,0.3)', marginBottom: '20px' }}>
                    To Do List Friday
                </h2>
                <TodoListfri />
            </section>

            {/* To Do Lists Section Saturday*/}
            <section style={{
                marginBottom: '40px',
                padding: '20px',
                border: '1px solid #eee',
                borderRadius: '8px',
                backgroundImage: 'linear-gradient(to bottom, #D396F4, #F2BAF0, #EBACE8, #e7a9f1, #ecb0f0, #ebbff8, #d8bffd)'
            }}>
                <h2 style={{ color: '#f7f3f3ff', textShadow: '1px 1px 2px rgba(0,0,0,0.3)', marginBottom: '20px' }}>
                    To Do List Saturday
                </h2>
                <TodoListsat />
            </section>

        </div>
    );
}

export default Displayexample;
