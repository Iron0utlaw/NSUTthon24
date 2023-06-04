import supabase from "../../supabase"

export default async function createData(teamData){
    await supabase
        .from('thon')
        .insert([
            {team: JSON.parse(JSON.stringify(teamData))}
        ])
        .single()
}