import React from "react";
import { UserCard } from 'react-ui-cards';

function PlayerCard(props) {
    return (
        <UserCard
        cardClass='float'
        header='https://i.imgur.com/w5tX1Pn.jpg'
        avatar='https://i.imgur.com/uDYejhJ.jpg'
        name='Justin Case'
        positionName='Software Developer'
        stats={[
          {
            name: 'followers',
            value: 21
          },
          {
            name: 'following',
            value: 37
          },
          {
            name: 'posts',
            value: 117
          }
        ]}
      />
    );
}

export default PlayerCard;