import {
  IonApp,
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonCol,
  IonContent,
  IonGrid,
  IonRow,
  IonHeader,
  IonImg,
  IonTitle,
  IonToolbar,
  IonPage,
} from '@ionic/react';

import clue from '../components/clue.jpeg';
import { gameResult } from '../App';

interface HomeProps {
  gameResults: gameResult[];
}

const Home: React.FC<HomeProps> = ({ gameResults }) => {
  return (
    <IonPage>
      <IonApp>
        <IonHeader>
          <IonToolbar color='primary'>
            <IonTitle className='ion-text-center'>
              The Companion app for
            </IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonImg src={clue} className='ion-padding' alt='logo'></IonImg>
          <IonCard>
            <IonCardHeader>
              <IonCardTitle className='ion-text-center'>
                Your Stats:
              </IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              Games Played: {gameResults.length}
              <br></br>
              Wins: 0<br></br>
              Losses: 0<br></br>
              Incorrect Guesses: 0<br></br>
            </IonCardContent>
          </IonCard>
          <IonGrid>
            <IonRow>
              <IonCol>
                <IonButton
                  routerLink='playground'
                  expand='block'
                  className='ion-text-center'
                  color='secondary'
                >
                  playground
                </IonButton>
                <IonButton
                  routerLink='players'
                  expand='block'
                  className='ion-text-center'
                  color='secondary'
                >
                  Players
                </IonButton>
              </IonCol>
            </IonRow>
          </IonGrid>
          <IonGrid>
            <IonRow>
              <IonCol>
                <IonButton
                  routerLink='play'
                  expand='block'
                  className='ion-text-center'
                  color='secondary'
                >
                  Start New Game
                </IonButton>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonContent>
      </IonApp>
    </IonPage>
  );
};

export default Home;
