import supabase from "../../supabase"
export async function postData(setLoading,allTeams){
    let i = 1;
    setLoading(true)
    console.log("hello")
    allTeams.map(async (team) => {
        team.team.map(async (student) => {
            await supabase
            .from('student-db')
            .insert([
            {
            id: `${i++}`, 
            name: student.name, 
            email: student.email,
            branch: student.branch,
            rollno: student.rollno,
            team_name: team.team[0].teamName,
         },
            ])

        })
    })
    setLoading(false);
}