import React, {useState, useEffect} from 'react'
import Team from './Team'
import supabase from '../supabase'
import './teams.css'
import {ReactComponent as Thon} from '../assets/thon-white.svg'
import { BarLoader } from 'react-spinners'
import { postData } from './modules/PostData'

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
    <div className='team-wrapper'>
        {loading ? <div className='bar'>
            <BarLoader className='bar' color='#2BE280' />
        </div>
        :
        <div>
            <div className='team-header'>
                <Thon className='logo'/>
                <h1>Teams</h1>
            </div>
            <div className='team-container'>
                <input type='text' placeholder='Search Team' onChange={(e) => setSearch(e.target.value)}></input>
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
                <button type='button' onClick={() => postData(setLoading,allTeams)}>Post Data</button>
            </div>
        </div>}
    </div>
  )
}

export default Teams