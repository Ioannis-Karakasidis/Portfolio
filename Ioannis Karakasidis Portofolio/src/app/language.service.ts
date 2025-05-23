import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  isgerman: boolean;

  constructor() {
    this.isgerman = this.getLanguageFromLocalStorage();
  }

  setLanguage(value: boolean) {
    this.isgerman = value;
    localStorage.setItem('isgerman', JSON.stringify(value));
  }

  private getLanguageFromLocalStorage(): boolean {
    const storedValue = localStorage.getItem('isgerman');
    return storedValue ? JSON.parse(storedValue) : false;
  }

  changetogerman() {
    this.setLanguage(true);
  }

  changetoenglish() {
    this.setLanguage(false);
  }

  information = {
    ElPocoLoco: {
      link: 'https://elpocoloco.ioanniskarakasidis.com/index.html',
      preview: '../../assets/projectpreviews/ElPocoLocopreview.png',
      Github:
        'https://github.com/Ioannis-Karakasidis/Portofolio/tree/main/El%20Poco%20loco',
      duration: { en: '5 Weeks', de: '5 Wochen' },
      technologies: ['HTML', 'Javascript', 'CSS'],
      details: [
        {
          title: { en: 'About the project', de: 'Über das Projekt' },
          description: {
            en: 'A Jump-and-Run game that brings joy to players of all ages. The player takes on the role of the hero, controlling the game mechanics and logic while applying advanced object-oriented programming concepts.',
            de: 'Ein Jump-and-Run-Spiel, das Spieler jeden Alters begeistert. Der Spieler übernimmt die Rolle des Helden hinter der Action und steuert die Spiellogik, während fortgeschrittene objektorientierte Programmierkonzepte angewendet werden.',
          },
        },
        {
          title: {
            en: 'How I have organised my work process?',
            de: 'Wie ich meinen Arbeitsprozess organisiert habe?',
          },
          description: {
            en: 'I structured my development process by defining core gameplay mechanics, setting up an object-oriented architecture, and iterating through prototypes based on feedback.',
            de: 'Ich habe meinen Entwicklungsprozess organisiert, indem ich die Kernmechaniken des Spiels definiert, eine objektorientierte Architektur aufgebaut und Prototypen basierend auf Feedback iteriert habe.',
          },
        },
        {
          title: { en: 'My role in the project', de: 'Meine Rolle im Projekt' },
          description: {
            en: 'I was responsible for implementing the character controls, collision detection, and game physics. Additionally, I optimized performance and ensured smooth animations for an engaging player experience.',
            de: 'Ich war verantwortlich für die Implementierung der Charaktersteuerung, Kollisionsabfrage und Spielphysik. Zudem habe ich die Performance optimiert und flüssige Animationen für ein fesselndes Spielerlebnis sichergestellt.',
          },
        },
      ],
    },
    Join: {
      link: 'https://join.ioanniskarakasidis.com/index.html',
      preview: '../../assets/projectpreviews/Joinpreview.png',
      Github:
        'https://github.com/Ioannis-Karakasidis/Portofolio/tree/main/Join',
      duration: { en: '2 Months', de: '2 Monate' },
      technologies: ['HTML', 'Javascript', 'CSS'],
      details: [
        {
          title: { en: 'About the project', de: 'Über das Projekt' },
          description: {
            en: 'Together with other participants from the training program, I developed a web app using HTML, CSS, JavaScript, Git, and Firebase. The goal was to create a project management tool to visualize task statuses and responsibilities.',
            de: 'Zusammen mit anderen Teilnehmern aus der Weiterbildung baue ich eine Web-App mit HTML, CSS, JavaScript, Git und Firebase. Ziel ist es, ein Projektmanagement-Tool zu erstellen, um den Status und die Verantwortlichkeiten von Aufgaben zu visualisieren.',
          },
        },
        {
          title: {
            en: 'How I have organised my work process?',
            de: 'Wie ich meinen Arbeitsprozess organisiert habe?',
          },
          description: {
            en: 'I structured my workflow by breaking tasks into milestones, ensuring smooth collaboration through Git version control, and using Firebase for real-time database management.',
            de: 'Ich habe meinen Arbeitsprozess organisiert, indem ich Aufgaben in Meilensteine unterteilt, eine reibungslose Zusammenarbeit über Git-Versionierung sichergestellt und Firebase für das Echtzeit-Datenbankmanagement genutzt habe.',
          },
        },
        {
          title: { en: 'My role in the project', de: 'Meine Rolle im Projekt' },
          description: {
            en: 'My primary role involved implementing the authentication system, managing task interactions, and ensuring a responsive user interface for an intuitive experience.',
            de: 'Meine Hauptaufgabe bestand darin, das Authentifizierungssystem zu implementieren, die Aufgabeninteraktionen zu verwalten und eine responsive Benutzeroberfläche für eine intuitive Nutzung zu gewährleisten.',
          },
        },
      ],
    },
    DaBubble: {
      link: 'https://dabubble.ioanniskarakasidis.com/',
      preview: '../../assets/projectpreviews/Screenshot project.png',
      Github: '',
      duration: { en: '3 Weeks', de: '3 Wochen' },
      technologies: ['Angular', 'TypeScript', 'HTML', 'CSS'],
      details: [
        {
          title: { en: 'About the project', de: 'Über das Projekt' },
          description: {
            en: 'This App is a Slack Clone App. It revolutionizes team communication and collaboration with its intuitive interface, real-time messaging, and robust channel organization.',
            de: 'Diese App ist ein Slack-Klon. Sie revolutioniert die Teamkommunikation und -zusammenarbeit mit ihrer intuitiven Benutzeroberfläche, Echtzeit-Messaging und robuster Kanalorganisation.',
          },
        },
        {
          title: {
            en: 'How I have organised my work process?',
            de: 'Wie ich meinen Arbeitsprozess organisiert habe?',
          },
          description: {
            en: 'In our group project, I helped keep the codebase clean and organized by breaking tasks into reusable components, following consistent naming conventions, and ensuring clear documentation. We also implemented testing to maintain code quality across the team.',
            de: 'In unserem Gruppenprojekt habe ich dazu beigetragen, den Code sauber und übersichtlich zu halten, indem ich Aufgaben in wiederverwendbare Komponenten unterteilt, einheitliche Namenskonventionen verwendet und auf eine klare Dokumentation geachtet habe. Außerdem haben wir Tests implementiert, um die Codequalität im gesamten Team sicherzustellen.',
          },
        },
        {
          title: { en: 'My role in the project', de: 'Meine Rolle im Projekt' },
          description: {
            en: 'We were a team of three people, and I was mainly responsible for building the login form and parts of the dashboard. I worked with Angular, TypeScript, and Firebase. We had great communication and supported each other throughout the project, which made the teamwork really smooth and enjoyable.',
            de: 'Wir waren ein Team von drei Personen, und ich war hauptsächlich für die Umsetzung des Login-Formulars und Teilen des Dashboards verantwortlich. Ich habe mit Angular, TypeScript und Firebase gearbeitet. Die Kommunikation im Team war super, und wir haben uns gegenseitig unterstützt – das hat die Zusammenarbeit sehr angenehm und effizient gemacht.',
          },
        },
      ],
    },
  };
}
