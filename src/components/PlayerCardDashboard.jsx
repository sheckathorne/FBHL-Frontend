import { useMemo } from 'react'
import { Flipper, Flipped } from 'react-flip-toolkit'
import PlayerCard from './PlayerCard'
import { useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'


const PlayerCardDashboard = ({ players, playerIsRanked, playerDetailStats, playerCardWidth }) => {
  const sortField = useSelector(state => state.sortField)
  const gkSortField = useSelector(state => state.gkSortField)
  
  const useQuery = () => {
    const { search } = useLocation()
    return useMemo(() => new URLSearchParams(search), [search])
  }

  const lastPlayerIndex = players.length
  const query = useQuery()
  const queriedPlayerId = query.get('playerId')
  const aPlayerIsSelelected = queriedPlayerId !== null

  return (
    <Flipper flipKey={players}>{
      players.map((player, i) => {
        const rankField = player.posSorted !== '0' ? 
          `${sortField.field}_rank` :
          `${gkSortField.field}_rank`

        const stats = player.posSorted !== '0' ? {
          total: {
            goals: player.skgoals.toString(),
            assists: player.skassists.toString(),
            points: player.skpoints.toString(),
            plusmin: player.skplusmin.toString(),
            gamesPlayed: player.skGamesPlayed.toString(),
            hits: player.skhits.toString(),
            blockedShots: player.skbs.toString() },
          perGame: {
            goals: '0',
            assists: '0',
            points: '0',
            plusmin: '0' }
        } : {
          goaltender: {
            gkGamesPlayed: player.gkGamesPlayed.toString(),
            gkwins: player.gkwins.toString(),
            gkwinpct: (player.gkwinpct * 100).toFixed(1).toString() + '%',
            gkgaa: player.gkgaa.toString(),
            gksvpct: parseFloat(player.gksvpct).toFixed(3).toString(),
            gkso: player.gkso.toString() },
          perGame: {
            goals: '0',
            assists: '0',
            points: '0',
            plusmin: '0' } }

        return (
          <Flipped key={player.playerId} flipId={player.playerId}>
            <PlayerCard
              name={player.playerName}
              teamId={player.teamId}
              stats={stats}
              playerId={player.playerId}
              marginClass={lastPlayerIndex === i + 1 ? 'mb-4' : 'mb-2'}
              rank={player[rankField]}
              playerIsRanked={player.posSorted === '0' ? player.playerIsRanked : playerIsRanked}
              posSorted={player.posSorted}
              playerCardClickSource='players'
              playerDetailStats={queriedPlayerId === player.playerId ? playerDetailStats : null}
              playerCardWidth={playerCardWidth}
              aPlayerIsSelelected={aPlayerIsSelelected}
            />
          </Flipped>
        )
      })}
    </Flipper>
  )
}

export default PlayerCardDashboard