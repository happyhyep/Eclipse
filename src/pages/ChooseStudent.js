import React, { useState, useEffect } from 'react';
import { SearchBox } from '../components/Common/SearchBox';
import StudentsProfile from '../components/Student/StudentsProfile';
import styled from 'styled-components';
import { tempUser } from '../store/temp/tempUserData';
import { getTest } from '../store/axiosTest';
import axios from 'axios';

const ChooseStudent = () => {
    const [allUserList, setAllUserList] = useState(tempUser);
    const [searchUserList, setSearchedUserList] = useState([]);
    const [searchText, setSearchText] = useState('');

    const [users, setUsers] = useState([]);
    const request = axios.get('/test/');
    useEffect(() => {
        axios.get('/test/')
            .then(response => {
                setUsers(response.data);
            });
    }, []);
    console.log(users);
    console.log(request);
    
    useEffect(() => {
        // @ts-ignore

        const filteredFriend = allUserList.filter((user) => {
            if (searchText === '' || searchText === null) {
                return user;
            } else {
                return user?.nickname?.includes(searchText);
            }
        });

        // @ts-ignore
        setSearchedUserList(filteredFriend);
    }, [searchText]);

    const onPressEnter = (e) => {
        if (e.key == 'Enter') {
            onSearch();
        }
    };
    // const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const onSearch = (e) => {
        setSearchText(document.getElementById('inputvalue')?.value);
        console.log(searchText);
        // const searchednickname = users.filter((val) => (searchText === val.nickname))
        // const result = users.filter((it) =>it.nickname === searchText)
        // return(result)
    };

    return (
        <div>
            <SearchBox
                placeholder={'친구의 닉네임을 입력하세요'}
                onKeyPress={onPressEnter}
                onClick={onSearch}
            />
            {searchUserList.length === 0 ? (
                <div> 표시할 유저가 없습니다 </div>
            ) : (
                <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                    {searchUserList &&
                        searchUserList.map((user) => (
                            <StudentsProfile key={user.id} user={user} />
                        ))}
                </div>
            )}
        </div>
    );
};

export default ChooseStudent;
