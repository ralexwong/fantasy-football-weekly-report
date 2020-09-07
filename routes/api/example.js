router.get(`/fetchLeagueInfo`, async (req, res, next) => {
    try {
  
      // find the league if its in database or through API
      const league_id = req.query.league_id;
  
      const rosterFromDatabase = await SleeperRoster.find({ "league_id": league_id });
  
      // if this league isn't in the database
      if (!rosterFromDatabase.length) {
  
        const resRoster = await axios.get(`https://api.sleeper.app/v1/league/${league_id}/users`);
        const data = resRoster.data;
  
        // pull the relevant info from the API and push it into a new array
        const arrayRoster = [];
        for (let i = 0; i < data.length; i++) {
          arrayRoster.push({
            user_id: data[i].user_id,
            display_name: data[i].display_name,
            avatar: data[i].avatar,
            roster_id: ""
          })
        }
  
        // create the schema
        const sleeperRoster = new SleeperRoster({
          league_id: league_id,
          league_info: [...arrayRoster]
        })
        
        // call API to assign the correct roster_id to each roster
        const linkRosterId = await axios.get(`https://api.sleeper.app/v1/league/${league_id}/rosters`);
        const rosterData = linkRosterId.data;
  
        for (let i = 0; i < arrayRoster.length; i++) {
          for (let j = 0; j < rosterData.length; j++) {
            if (sleeperRoster.league_info[i].user_id === rosterData[j].owner_id) {
              sleeperRoster.league_info[i].roster_id = rosterData[j].roster_id
            }
          }
        }
  
        // console.log(sleeperRoster);
        console.log("league saved");
  
        // save the schema in the databse and push the response back to the client side
        sleeperRoster.save()
        res.json(sleeperRoster)
  
      }
      // if its already in database the result will be sent to the client
      if (rosterFromDatabase.length) {
        console.log("league already created");
        res.json(rosterFromDatabase[0])
      }
  
    } catch(e) {
      next(e)
    }
  })
  