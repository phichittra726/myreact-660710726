import React from 'react';



const Avatar = () => (
    <img 
        src="https://i.pinimg.com/736x/c3/7b/d7/c37bd777c3b19b732f769b5630a78fab.jpg"
        alt="User Avatar"
        style={{
            borderRadius: '50%',    
            width: '50px',
            height: '50px',
            border: '2px solid #df36e872'

        
        }}
    />
);

const UserName = () => (
    <h3 style={{ color: '#d517bb98', margin: '10px 0' }}>
        Phichittra Khunnoi (Gie)
        <p>660710726</p>
    </h3>
    
);

const UserBio = () => (
    <p style={{ color: '#666', fontSize: '14px' }}>
        Faculty of Science student
    </p>
);

// Component หลักที่ประกอบจาก components ย่อย
const UserCard = () => {
    return (
        <div style={{
            border: '1px solid #d3abcdff',
            padding: '20px',
            borderRadius: '12px',
            textAlign: 'center',
            backgroundColor: '#ffe6f2',
            maxWidth: '300px',
            margin: '20px auto'
        }}>
            <Avatar />
            <UserName />
            <UserBio />
        </div>
    );
};

export default UserCard;