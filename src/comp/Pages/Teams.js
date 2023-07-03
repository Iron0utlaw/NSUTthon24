import React, {useState, useEffect, useRef} from 'react'
import Team from '../Team/Team'
import supabase from '../../supabase'
import './teams.css'
import {ReactComponent as Thon} from '../../assets/thon-white.svg'
import { BarLoader } from 'react-spinners'
import { postData } from '../modules/PostData'
import {BiSearch} from 'react-icons/bi'
import { Link } from 'react-router-dom'
import { AnimatePresence,motion } from 'framer-motion'

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
        console.log(allTeams)
},[])

    allTeams.sort((a, b) => {
        if (a.score === b.score){
          return a.id < b.id ? -1 : 1
        } else {
          return a.score > b.score ? -1 : 1
        }})
    const [height, setHeight] = useState(0);
    const elementRef = useRef(null);
    

    useEffect(() => {
        setHeight(elementRef.current.offsetHeight);
    }, []);
    if(err) return <h1>ERROR</h1>


  return (
    <div className='team-loader'>
        {loading ? <div className='bar'>
            <BarLoader className='bar' color='#2BE280' />
        </div>
        :
        <div className='team-wrapper'>
            <div className='temp'>
            <Link name='Logo-redirect' to='/'><Thon className='logo'/></Link>
            <motion.h1
            initial={{y: `${height}`, clipPath: 'polygon(0 0, 100% 0, 99% 0, 0 0) ', }}
            animate={{y: 0, clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',}}
            transition={{duration: 1}}
            className='team-header'
            ref={elementRef}>Teams</motion.h1>
            </div>
            <div className='team-container'>
                <div className='team-search'>
                <input className='search-bar' type='text' placeholder='Search Team' onChange={(e) => setSearch(e.target.value.toLowerCase())}></input>
                <button name='search-btn' className='search-btn' type='button'>
                    <BiSearch/>
                </button>
                </div>
                <AnimatePresence>
                <motion.div
                layout
                initial={{opacity: 0, y: 200}}
                exit={{opacity: 0, y: 200}}
                animate={{opacity: 1, y: 0}}
                transition={{duration: 1.2}}
                className='all-teams'>
                {
                    allTeams.filter((entry) => {
                        return search.toLowerCase === ''
                        ? entry
                        : entry.team[0].teamName.toLowerCase().includes(search) || entry.id.toString().includes(search);
                    }).map((entry) => {
                        return <Team key={entry.id} entry={entry}/>
                    })
                }
                </motion.div>
                </AnimatePresence>
                {/* <button type='button' onClick={() => postData(setLoading,allTeams)}>Post Data</button> */}
            </div>
        </div>}
    </div>
  )
}

export default Teams