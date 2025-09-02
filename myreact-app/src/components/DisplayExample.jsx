import React from 'react';
import UserCard from './UserCard';
import TodoList from './TodoList';

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

            {/* To Do Lists Section */}
            <section style={{
                marginBottom: '40px',
                padding: '20px',
                border: '1px solid #eee',
                borderRadius: '8px',
                backgroundImage: 'linear-gradient(to bottom, #D396F4, #F2BAF0, #EBACE8, #e7a9f1, #ecb0f0, #ebbff8, #d8bffd)'
            }}>
                <h2 style={{ color: '#fff', textShadow: '1px 1px 2px rgba(0,0,0,0.3)', marginBottom: '20px' }}>
                    To Do Lists
                </h2>
                <TodoList />
            </section>
        </div>
    );
}

export default Displayexample;
