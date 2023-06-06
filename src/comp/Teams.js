import React, {useState, useEffect} from 'react'
import Team from './Team'
import supabase from '../supabase'
import './teams.css'

const Teams = () => {
    const [allTeams,setAllTeams] = useState([]);
    const [search,setSearch] = useState('');
    const [loading,setLoading] = useState(false);
    const [err,setErr] = useState(false);
    async function fetchData(){
        setLoading(true)
        let { data: thon, error } = await supabase
        .from('thon')
        .select('*')
        setAllTeams(thon);

        if (error) {
            setErr(true);
        }
        setLoading(false)
    }

    useEffect(() => {
        fetchData();
    },[])

    if(err) return <h1>ERROR</h1>
  return (
    <div >
        {loading ? <h1>Loading</h1> : <h1>Teams</h1>}
        <input type='text' placeholder='Search Team' onChange={(e) => setSearch(e.target.value)}></input>
        <h2>{allTeams.length}</h2>
        <div className='all-teams'>
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
    </div>
  )
}

export default Teams