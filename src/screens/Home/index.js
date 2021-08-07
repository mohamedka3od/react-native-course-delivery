import React, {useState,useEffect} from 'react';
import { FlatList,ActivityIndicator} from 'react-native';
import {RepoHeader , RepoCard} from '../../components';
import { getAllRepos } from '../../services';
import styles from './styles';

// const data =[
//     {
//       id:1,
//       title : 'React Native',
//       description:'framework for developing mobile apps',
//       issuesNumber:'1234',
//       providerName:'facebook',
//       starsNumber:'6465',
//       image:'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png'
//     },
//     {
//       id:2,
//       title : 'Flutter',
//       description:'framework for developing mobile apps',
//       issuesNumber:'5486',
//       providerName:'google',
//       starsNumber:'845',
//       image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZia9AlsH6IF-vl769X2-LKU20fyyqxwzoNGuUf31C-DknQe2Yi59-2XEiUC1LtenhsLc&usqp=CAU'
//     },
//     {
//       id:3,
//       title : 'React Native',
//       description:'framework for developing mobile apps jkjkkhjkjkhjkhjh',
//       issuesNumber:'1234',
//       providerName:'facebook',
//       starsNumber:'6465',
//       image:'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png'
//     },
//     {
//       id:4,
//       title : 'Flutter',
//       description:'framework for developing mobile apps',
//       issuesNumber:'5486',
//       providerName:'google',
//       starsNumber:'845',
//       image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZia9AlsH6IF-vl769X2-LKU20fyyqxwzoNGuUf31C-DknQe2Yi59-2XEiUC1LtenhsLc&usqp=CAU'
//     },
//   ];
function Home  () {
    const [data,setData]=useState([]);
    const [loading, setLoading] = useState(true);
    const [page,setPage] = useState(1);
    const _onLoad = async()=>{
        const _data = await getAllRepos(page);
        
        setData([...data,..._data]);
        setLoading(false);
    };
    useEffect(()=>{
        _onLoad();
    },[page]);
    const renderItem = (data)=>{
        return(
            <RepoCard
            key ={data.item.id}
            title={data.item.full_name}
            description={data.item.description}
            imageSrc={data.item.owner.avatar_url}
            issuesNumber={data.item.open_issues}
            providerName={data.item.owner.login}
            starsNumber={data.item.stargazers_count}
            numberOfLines={1}
            />
        );

    };
    const increasePageNumber =()=>{
        setLoading(true);
        setPage((val)=> val+1);
    };
    return ( 
        <>
            <RepoHeader text={'All repositories'}/>
            <FlatList
            data={data}
            // horizontal
            onEndReached={increasePageNumber}
            onEndReachedThreshold={2}
            renderItem={renderItem}
            contentContainerStyle={styles.contentContainer}
            />
            {loading && <ActivityIndicator/>}
            
        </>
    );
}
 
export default Home;