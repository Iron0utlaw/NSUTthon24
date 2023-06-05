import React, {useState, useEffect} from 'react'
import Team from './Team'
import supabase from '../supabase'

const Teams = () => {
    const [allTeams,setAllTeams] = useState([]);
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
        {
            allTeams.map((entry) => {
                return <Team key={entry.id} entry={entry}/>
            })
        }
    </div>
  )
}

export default Teams