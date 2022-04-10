import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
  IonImg,
  IonApp,
  IonCard,
  IonLabel,
  IonCheckbox,
  IonCardHeader,
  IonItem,
  IonList,
  IonActionSheet,
  IonGrid,
  IonCardTitle,
  IonChip,
  IonIcon,
  IonCardContent,
} from '@ionic/react';
import { trash, close, glassesOutline, checkmarkCircle } from 'ionicons/icons';
import { currentGame, gameResult } from '../App';
import { useHistory } from 'react-router';
import clue from '../components/clue.jpeg';
import { useState, useRef } from 'react';

import './Home.css';

interface PlayGameProps {
  addGameResult: (r: gameResult) => void;
  currentGame: currentGame;
  gameResults: gameResult[];
}

const PlayGame: React.FC<PlayGameProps> = ({ addGameResult, currentGame }) => {
  const [showActionSheet, setShowActionSheet] = useState(false);

  const history = useHistory();

  const pageRef = useRef();

  return (
    <IonPage ref={pageRef}>
      <IonApp>
        <IonHeader>
          <IonToolbar color='hunter-green'>
            <IonTitle className='ion-text-center'>Who Dun It?</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent color='dark' fullscreen>
          <IonChip>
            <IonLabel>Default</IonLabel>
          </IonChip>
          <IonImg src={clue} className='ion-padding'></IonImg>
          <IonCard>
            <IonCardHeader>
              <IonCardTitle color='scarlet' className='ion-text-center'>
                Current Detectives:
              </IonCardTitle>
            </IonCardHeader>
            {currentGame.players.map((x) => (
              <IonGrid>
                <IonList lines='none'>
                  <IonChip outline color='success'>
                    <IonIcon icon={checkmarkCircle}></IonIcon>
                    <IonLabel color='success' key={x}>
                      {x}
                    </IonLabel>
                  </IonChip>
                </IonList>
              </IonGrid>
            ))}
          </IonCard>

          <IonCard color='medium' className='ion-text-center'>
            <IonCardHeader>
              <IonCardTitle>Characters</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <IonItem color='scarlet'>
                <IonLabel>Mrs. Scarlett</IonLabel>
                <IonCheckbox checked color='primary' slot='start'></IonCheckbox>
              </IonItem>
              <IonItem color='mustard'>
                <IonLabel>Colonel Mustard</IonLabel>
                <IonCheckbox checked color='primary' slot='start'></IonCheckbox>
              </IonItem>
              <IonItem color='white'>
                <IonLabel>Mrs. White</IonLabel>
                <IonCheckbox checked color='primary' slot='start'></IonCheckbox>
              </IonItem>
              <IonItem color='hunter-green'>
                <IonLabel>Mr. Green</IonLabel>
                <IonCheckbox checked color='primary' slot='start'></IonCheckbox>
              </IonItem>
              <IonItem color='peacock'>
                <IonLabel>Mrs. Peacock</IonLabel>
                <IonCheckbox checked color='primary' slot='start'></IonCheckbox>
              </IonItem>
              <IonItem color='plum'>
                <IonLabel>Professor Plum</IonLabel>
                <IonCheckbox checked color='primary' slot='start'></IonCheckbox>
              </IonItem>
            </IonCardContent>
          </IonCard>
          <IonCard color='medium'>
            <IonCardHeader>
              <IonCardTitle className='ion-text-center'>Rooms</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <IonItem color='peacock'>
                <IonLabel>Ball Room</IonLabel>
                <IonCheckbox checked color='primary' slot='start'></IonCheckbox>
              </IonItem>
              <IonItem color='peacock'>
                <IonLabel>Billiard Room</IonLabel>
                <IonCheckbox checked color='primary' slot='start'></IonCheckbox>
              </IonItem>
              <IonItem color='peacock'>
                <IonLabel>Conservatory</IonLabel>
                <IonCheckbox checked color='primary' slot='start'></IonCheckbox>
              </IonItem>
              <IonItem color='peacock'>
                <IonLabel>Dining Room</IonLabel>
                <IonCheckbox checked color='primary' slot='start'></IonCheckbox>
              </IonItem>
              <IonItem color='peacock'>
                <IonLabel>Hall</IonLabel>
                <IonCheckbox checked color='primary' slot='start'></IonCheckbox>
              </IonItem>
              <IonItem color='peacock'>
                <IonLabel>Kitchen</IonLabel>
                <IonCheckbox checked color='primary' slot='start'></IonCheckbox>
              </IonItem>
              <IonItem color='peacock'>
                <IonLabel>Lounge</IonLabel>
                <IonCheckbox checked color='primary' slot='start'></IonCheckbox>
              </IonItem>
              <IonItem color='peacock'>
                <IonLabel>Library</IonLabel>
                <IonCheckbox checked color='primary' slot='start'></IonCheckbox>
              </IonItem>
              <IonItem color='peacock'>
                <IonLabel>Study</IonLabel>
                <IonCheckbox checked color='primary' slot='start'></IonCheckbox>
              </IonItem>
            </IonCardContent>
          </IonCard>

          <IonCard color='medium'>
            <IonCardHeader>
              <IonCardTitle className='ion-text-center'>Weapons</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <IonItem color='dark'>
                <IonLabel>Knife</IonLabel>
                <IonCheckbox checked color='primary' slot='start'></IonCheckbox>
              </IonItem>
              <IonItem color='dark'>
                <IonLabel>Revolver</IonLabel>
                <IonCheckbox checked color='primary' slot='start'></IonCheckbox>
              </IonItem>
              <IonItem color='dark'>
                <IonLabel>Rope</IonLabel>
                <IonCheckbox checked color='primary' slot='start'></IonCheckbox>
              </IonItem>
              <IonItem color='dark'>
                <IonLabel>Wrench</IonLabel>
                <IonCheckbox checked color='primary' slot='start'></IonCheckbox>
              </IonItem>
              <IonItem color='dark'>
                <IonLabel>Candlestick</IonLabel>
                <IonCheckbox checked color='primary' slot='start'></IonCheckbox>
              </IonItem>
              <IonItem color='dark'>
                <IonLabel>Lead Pipe</IonLabel>
                <IonCheckbox checked color='primary' slot='start'></IonCheckbox>
              </IonItem>
            </IonCardContent>
          </IonCard>
          <IonCard color='medium'>
            <IonButton onClick={() => setShowActionSheet(true)} expand='block'>
              Make Your Next Move
            </IonButton>
            <IonActionSheet
              isOpen={showActionSheet}
              onDidDismiss={() => setShowActionSheet(false)}
              cssClass='my-custom-class'
              buttons={[
                {
                  text: 'Did you get the criminal?',
                  icon: glassesOutline,
                  data: 'Data value',
                  handler: () => {
                    console.log('Play clicked');
                    history.push('/guess');
                  },
                },
                {
                  text: 'Quit',
                  role: 'destructive',
                  icon: trash,
                  id: 'delete-button',
                  data: {
                    type: 'delete',
                  },
                  handler: () => {
                    console.log('Delete clicked');
                    history.push('/');
                  },
                },

                {
                  text: 'Cancel',
                  icon: close,
                  role: 'cancel',
                  handler: () => {
                    console.log('Cancel clicked');
                  },
                },
              ]}
            ></IonActionSheet>
          </IonCard>
        </IonContent>
      </IonApp>
    </IonPage>
  );
};

export default PlayGame;
