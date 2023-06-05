import React, {useState, useEffect} from 'react'
import Team from './Team'
import supabase from '../supabase'

const Teams = () => {
    const [allTeams,setAllTeams] = useState([]);
    const [search,setSearch] = useState('');
    async function fetchData(){
        let { data: thon, error } = await supabase
        .from('thon')
        .select('*')
        setAllTeams(thon);
    }

    useEffect(() => {
        fetchData();
    },[])
  return (
    <div>
        <h1>Teams</h1>
        <input type='text' placeholder='Search Team' onChange={(e) => setSearch(e.target.value)}></input>
        {
            allTeams.filter((entry) => {
                return search.toLowerCase === ''
                ? entry
                : entry.team[0].teamName.toLowerCase().includes(search) || entry.id.toString().includes(search);
            }).map((entry) => {
                return <Team key={entry.id} entry={entry}/>
            })
        }
    </div>
  )
}

export default Teams