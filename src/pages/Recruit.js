<<<<<<< HEAD
import React, { useState, useEffect } from 'react';
import { SearchBox } from '../components/Common/SearchBox';
import StudentsProfile from '../components/Student/StudentsProfile';
import styled from 'styled-components';
import { tempUser } from '../store/temp/tempUserData';
import { getTest } from '../store/axiosTest';

const axios = require ('axios');
const Recruit = () => {
    const [allUserList, setAllUserList] = useState(tempUser);
    const [searchUserList, setSearchedUserList] = useState([]);
    const [searchText, setSearchText] = useState('');

    async function testFunction () {
        const response = await axios.get('http://ec2-50-18-22-205.us-west-1.compute.amazonaws.com:8080/test');
        console.log(response);
      };
      testFunction();
      
    
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
        <PageDiv>
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
        </PageDiv>
    );
=======
import { PageDiv } from "./ChooseStudent";

const Recruit = () => {
  return (
    <>
      <PageDiv>
        <h1>
          <a style={{ color: "white", fontSize: "min(6vw, 40px)" }}>
            From Professor...
          </a>
        </h1>
      </PageDiv>
    </>
  );
>>>>>>> a656420baa0ba388bb60c8f590c0bd8d61295432
};

export default Recruit;

export const PageDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1em;
`;
