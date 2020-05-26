import jss from 'jss'
import preset from 'jss-preset-default'

/*** assets ***/
import logoMid from '../assets/ic-logo-inverse-01.svg';
import logoMidBlack from '../assets/ic-logo-black-01.svg';
import logoBig from '../assets/ic-logo-horizontal-purple-300.svg';
import audioIcon from '../assets/ic-callkit-audio.svg';
import audioIcon20 from '../assets/ic-callkit-audio-20.svg';
import videoIcon from '../assets/icon-call-video.svg';
import videoPurpleIcon from '../assets/ic-video-thumbnail-purple.svg';
import videoWhiteIcon from '../assets/ic-video-thumbnail-white.svg';
import videoBlackIcon from '../assets/ic-video-thumbnail-black.svg';
import audioOffBlack from '../assets/ic-callkit-audio-off-black.svg';
import audioOffWhite from '../assets/ic-callkit-audio-off-white.svg';
import declineWhiteIcon from '../assets/ic-callkit-decline.svg';
import declineBlackIcon from '../assets/ic-decline-black.svg';
import endIcon from '../assets/ic-callkit-end.svg';
import toastErrorIcon from '../assets/ic-error-20.svg';
import toastCloseBtn from '../assets/ic-close-20.svg';
import widgetIcon from '../assets/ic-call-logs-filled.svg';
import settingsIcon from '../assets/ic-settings.svg';
import settingsCloseIcon from '../assets/ic-close-black-20.svg';
import widgetCloseIcon from '../assets/ic-close-24.svg';
import arrowDownIcon from '../assets/ic-input-arrow-down.svg';
import avatarIcon from '../assets/icon-avatar.svg';

const option = Object.assign(
  {},
  preset(),
  {
    createGenerateId: () => {
      return (rule, sheet) => `sendbird-sample-${rule.key}`;
    }
  }
);

jss.setup(option);

const colors = {
  navy50: '#f6f8fc',
  navy100: '#dee2f2',
  navy200: '#c9d0e6',
  navy300: '#b6bdd7',
  navy800: '#353761',
  navy900: '#212242',
  white: '#ffffff',
  purple300: '#825eeb',
  green300: '#1fcca1',
  green400: '#00998c',
  red300: '#f24d6b',
  red400: '#d92148',
  mutegray: 'rgba(168, 168, 168, 0.38)'
};

const styles = {
  mainApp: {
  },

  center: {
    alignItems: 'center',
    justifyContent: 'center'
  },

  right: {
    alignItems: 'center',
    justifyContent: 'flex-end',
  },

  column: {
    display: 'flex',
    flexDirection: 'column'
  },

  row: {
    display: 'flex',
    flexDirection: 'row'
  },

  content: {
    marginBottom: 'auto',
    width: '100%'
  },

  grow1: {
    flexGrow: 1
  },

  grow2: {
    flexGrow: 2
  },

  grow3: {
    flexGrow: 3
  },

  grow4: {
    flexGrow: 4
  },

  btn: {
    display: 'flex',
    cursor: 'pointer',
    alignItems: 'center',
    justifyContent: 'center',
    textDecoration: 'none',
    border: 'none',
    borderRadius: '4px',
    height: '40px',
    '& label': {
      cursor: 'inherit'
    }
  },

  btnPrimary: {
    backgroundColor: colors.purple300,
    color: colors.white
  },

  btnBig: {
    width: '180px',
    height: '50px',
    marginLeft: '16px',
    marginRight: '16px'
  },

  btnMid: {
    width: '80px',
    height: '40px',
  },

  btns: {
    marginTop: '16px'
  },

  container: {
    display: 'flex',
    width: '100%',
    height: '100%',
  },

  hidden: {
    display: 'none'
  },

  invisible: {
    visibility: 'hidden'
  },

  avatar: {
    width: '32px',
    height: '32px',
    borderRadius: '50%',
    marginLeft: '24px',
    marginRight: '16px',
    backgroundImage: `url(${avatarIcon})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
  },

  profileSmall: {
    width: '32px',
    height: '32px',
    borderRadius: '50%',
    marginLeft: '24px',
    marginRight: '16px',
    backgroundImage: data => `url(${data.profileUrl})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
  },

  logoMid: {
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    backgroundColor: `${colors.white}`,
    backgroundImage: `url(${logoMid})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    marginBottom: '16px'
  },

  logoBig: {
    display: 'block',
    width: '180px',
    height: '40px',
    background: `url(${logoBig})`,
    marginBottom: '24px'
  },


  /*** views ***/
  view: {
    boxSizing: 'border-box',
    width: '100vw',
    height: '100%',
    padding: '24px',
    display: 'relative'
  },

  viewDial: {
    color: colors.navy900,
    '& $content': {
      marginTop: 'auto'
    },
    '& $formContainer': {
      border: 'none'
    }
  },

  viewLogin: {
    backgroundColor: colors.navy50,
    color: colors.navy900,
    '& $content': {
      marginTop: '134px'
    }
  },

  viewCall: {
    backgroundColor: colors.navy900,
    color: colors.white
  },

  viewSettings: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    zIndex: '100',
    overflow: 'hidden',
    borderRadius: 'inherit'
  },

  settingsCloseButton: {
    marginLeft: 'auto',
    width: '32px',
    height: '32px',
    cursor: 'pointer',
    backgroundImage: `url(${settingsCloseIcon})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
  },

  cover: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    opacity: 0.6,
    backgroundColor: colors.navy800
  },

  popup: {
    boxSizing: 'border-box',
    width: '100%',
    maxWidth: '480px',
    paddingTop: '16px',
    paddingBottom: '24px',
    paddingLeft: '32px',
    paddingRight: '32px',
    zIndex: '1',
    boxShadow: '0 6px 10px -5px rgba(33, 34, 66, 0.04), 0 6px 30px 5px rgba(33, 34, 66, 0.08), 0 16px 24px 2px rgba(33, 34, 66, 0.12)',
    borderRadius: '4px',
    backgroundColor: colors.white
  },


  /*** fonts ***/
  fontSmall: {
    fontFamily: 'Avenir Next',
    fontSize: '12px',
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    textRendering: 'optimizelegibility',
    '-webkit-font-smoothing': 'antialiased',
    '-moz-osx-font-smoothing': 'grayscale'
  },

  fontNormal: {
    fontFamily: 'Avenir Next',
    fontSize: '14px',
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: '1.43',
    letterSpacing: 'normal',
    textRendering: 'optimizelegibility',
    '-webkit-font-smoothing': 'antialiased',
    '-moz-osx-font-smoothing': 'grayscale'
  },

  fontMidBig: {
    fontFamily: 'Avenir Next',
    fontSize: '18px',
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: '1.33',
    letterSpacing: '-0.25px',
    textRendering: 'optimizelegibility',
    '-webkit-font-smoothing': 'antialiased',
    '-moz-osx-font-smoothing': 'grayscale'
  },

  font20: {
    fontFamily: 'Avenir Next',
    fontSize: '20px',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: '1.33',
    letterSpacing: '-0.25px',
    textRendering: 'optimizelegibility',
    '-webkit-font-smoothing': 'antialiased',
    '-moz-osx-font-smoothing': 'grayscale'
  },

  fontBig: {
    fontFamily: 'Avenir Next',
    height: '32px',
    fontSize: '24px',
    fontWeight: 'normal',
    fontStretch: 'normal',
    fontStyle: 'normal',
    lineHeight: '1.33',
    letterSpacing: '-0.25px',
    textRendering: 'optimizelegibility',
    '-webkit-font-smoothing': 'antialiased',
    '-moz-osx-font-smoothing': 'grayscale'
  },

  fontHeavy: {
    fontWeight: 500
  },

  fontDemi: {
    fontWeight: 600
  },


  /*** components ***/
  formContainer: {
    boxSizing: 'border-box',
    width: '100%',
    maxWidth: '500px',
    borderRadius: '4px',
    border: 'solid 1px #dee2f2',
    backgroundColor: colors.white,
    paddingLeft: '48px',
    paddingRight: '48px'
  },

  field: {
    boxSizing: 'border-box',
    width: '100%',
    height: '40px',
    paddingTop: '10px',
    paddingBottom: '10px',
    paddingLeft: '16px',
    borderRadius: '4px',
    border: `solid 1px ${colors.navy200}`,
    backgroundColor: colors.white,
    marginBottom: '16px'
  },

  fieldInvalid: {
    border: `solid 1px ${colors.red300}`
  },

  fieldLabel: {
    display: 'inline-block',
    height: '12px',
    marginTop: '6px',
    marginBottom: '6px',
    '&:first-of-type': {
      marginTop: '38px'
    }
  },


  /*** buttons ***/
  loginButton: {
    width: '100%',
    marginBottom: '40px'
  },

  dialButton: {
  },

  logoutButton: {
  },


  /*** misc ***/
  loginTitleDiv: {
    marginBottom: '40px'
  },

  hr: `
    width: calc(100% + 96px);
    height: 1px;
    border: 0;
    border-top: 1px solid ${colors.navy100};
    margin-left: -48px;
    margin-top: 10px;
    margin-bottom: 23px;
  `,

  error: {
    marginBottom: '8px',
    color: colors.red300
  },

  remoteProfile: `
    display: block;
    width: 120px;
    height: 120px;
    border-radius: 50%;
    object-fit: contain;
    margin-bottom: 24px;
  `,

  peerName: `
    margin-bottom: 4px;
  `,

  connectionInfo: `
    height: 20px;
    margin-bottom: 24px;
  `,

  peerStateDiv: `
    align-items: center;
    margin-bottom: 97px;
  `,

  peerMuteIcon: `
    width: 32px;
    height: 32px;
    background-image: url(${audioOffWhite});
    background-repeat: no-repeat;
    background-position: center;
    margin-bottom: 8px;
  `,

  peerMuteLabel: `
    display: block;
  `,

  callButtons: {
    position: 'relative'
  },

  btnCircle: {
    width: '64px',
    height: '64px',
    border: 'none',
    borderRadius: '50%',
    cursor: 'pointer',
    '&::before': {
      content: '',
      display: 'block',
      width: '64px',
      height: '64px',
      borderRadius: '50%'
    },
    'btn-circle:hover::before': {
      backgroundColor: colors.mutegray
    }
  },

  btnCall: {
    marginLeft: '16px',
    marginRight: '16px',
    marginBottom: '8px',
  },

  btnVideoAccept: {
    backgroundColor: colors.green300,
    backgroundImage: `url(${videoIcon})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
  },

  btnAccept: {
    backgroundColor: colors.green300,
    backgroundImage: `url(${audioIcon})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
  },

  btnMute: {
    backgroundColor: colors.mutegray,
    backgroundImage: `url(${audioOffWhite})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
  },

  btnUnmute: {
    backgroundColor: colors.white,
    backgroundImage: `url(${audioOffBlack})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
  },

  btnStopVideo: {
    backgroundColor: colors.mutegray,
    backgroundImage: `url(${videoWhiteIcon})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
  },

  btnStartVideo: {
    backgroundColor: colors.white,
    backgroundImage: `url(${videoBlackIcon})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
  },

  btnEnd: {
    backgroundColor: colors.red300,
    backgroundImage: `url(${endIcon})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
  },

  videoView: {
    position: 'absolute',
    height: '100%',
    left: '50%',
    transform: 'translate(-50%)',
  },

  videoViewDiv: {
    position: 'absolute',
    overflow: 'hidden'
  },

  videoViewStopped: {
    '& $videoView': {
      visibility: 'invisible'
    }
  },

  videoFull: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    transition: 'all 1s',
  },

  videoSmall: {
    position: 'absolute',
    top: '16px',
    left: '16px',
    width: '200px',
    height: '150px',
    transition: 'all 1s'
  },

  videoHidden: {
    opacity: '0',
    transition: 'all 0.5s',
    display: 'none'
  },

  callBackground: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    overflow: 'hidden'
  },

  callForeground: {
    position: 'relative'
  },

  btnDecline: {
    backgroundColor: colors.red300,
    backgroundImage: `url(${declineWhiteIcon})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
  },

  closeDiv: {},

  btnClose: {
    width: '248px',
    height: '64px',
    border: 'none',
    borderRadius: '4px',
    marginBottom: '28px',
    background: 'rgba(255, 255, 255, 0.08)',
    color: colors.white,
    '&:hover': {
      cursor: 'pointer',
      background: 'rgba(255, 255, 255, 0.28)'
    }
  },

  '@keyframes fadein': {
    from: {
      bottom: 0,
      opacity: 0
    },
    to: {
      bottom: '30px',
      opacity: 1
    }
  },

  '@keyframes fadeout': {
    from: {
      opacity: 1
    },
    to: {
      bottom: 0,
      opacity: 0
    }
  },

  toast: {
    visibility: 'hidden',
    position: 'absolute',
    left: '32px',
    bottom: '32px',
    width: '33%',
    padding: '14px 16px',
    zIndex: '200',
    borderRadius: '4px',
    boxShadow: '0 6px 10px -5px rgba(33, 34, 66, 0.04), 0 6px 30px 5px rgba(33, 34, 66, 0.08), 0 16px 24px 2px rgba(33, 34, 66, 0.12)',
    backgroundColor: colors.red300
  },

  toastShow: {
    animation: '$fadein 0.5s'
  },

  toastHide: {
    animation: '$fadeout 0.5s'
  },

  toastErrorIcon: {
    boxSizing: 'border-box',
    alignSelf: 'start',
    width: '20px',
    height: '20px',
    paddingRight: '20px',
    objectFit: 'contain',
    backgroundColor: 'inherit',
    backgroundImage: `url(${toastErrorIcon})`
  },

  toastMsg: {
    marginLeft: '16px',
    color: colors.white
  },

  toastCloseBtn: {
    cursor: 'pointer',
    boxSizing: 'border-box',
    alignSelf: 'start',
    width: '20px',
    height: '20px',
    paddingLeft: '32px',
    marginLeft: 'auto',
    objectFit: 'contain',
    border: 'none',
    backgroundColor: 'inherit',
    backgroundImage: `url(${toastCloseBtn})`,
    backgroundPosition: 'right',
    backgroundRepeat: 'no-repeat'
  },

  selectContainer: {
    boxSizing: 'border-box',
    width: '100%',
    maxWidth: '500px',
    borderRadius: '4px',
    backgroundColor: colors.white
  },

  selectLabel: {
    display: 'inline-block',
    height: '12px',
    marginTop: '6px',
    marginBottom: '6px',
    '&:first-of-type': {
      marginTop: '16px'
    }
  },

  blockSelect: {
    appearance: 'none',
    display: 'block',
    width: '100%',
    height: '40px',
    marginBottom: '16px',
    paddingLeft: '16px',
    paddingRight: '36px',
    paddingTop: '10px',
    paddingBottom: '10px',
    borderRadius: '4px',
    border: `solid 1px ${colors.navy200}`,
    backgroundColor: colors.white,
    backgroundImage: `url(${arrowDownIcon})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'calc(100% - 12px) center',
    '&:last-of-type': {
      marginBottom: '0'
    }
  },

  versionInfo: {
    display: 'none',
    position: 'absolute',
    width: '100%',
    bottom: '24px'
  },

  versionLabel: {
    marginLeft: '8px',
    marginRight: '8px'
  },

  /*** widget ***/
  widgetApp: {
    '& $fieldLabel': {
      '&:first-of-type': {
        marginTop: '0px'
      }
    },
    '& $viewLogin': {
      backgroundColor: colors.white,
      '& $content': {
        marginTop: '96px'
      },
      '& $versionInfo': {
        display: 'flex'
      },
      '& $closeButton': {
        position: 'absolute',
        top: '16px',
        right: '16px',
        backgroundImage: `url(${declineBlackIcon})`
      }
    },
    '& $viewDial': {
      '& $content': {
        marginTop: '144px'
      },
      '& $versionInfo': {
        display: 'flex'
      }
    },
    '& $widgetHeader': {
      flexDirection: 'row',
      height: '80px',
      borderTopLeftRadius: '8px',
      borderTopRightRadius: '8px',
      '& $closeButton:hover': {
        backgroundColor: colors.navy900
      }
    },
    '& $userDiv': {
      flexDirection: 'row'
    },
    '& $avatar': {
      width: '40px',
      height: '40px'
    },
    '& $profileSmall': {
      width: '40px',
      height: '40px'
    },
    '& $headerDivider': {
      display: 'none'
    },
    '& $headerButtons': {
      marginLeft: 'auto',
      marginRight: '14px'
    },
    '& $settingsButton': {
      width: '48px',
      height: '48px'
    },
    '& $closeButton': {
      display: 'block'
    },
    '& $headerNickname': {
      display: 'block'
    },
    '& $formContainer': {
      boxSizing: 'border-box',
      paddingLeft: '24px',
      paddingRight: '24px',
      border: 'none'
    },
    '& $videoSmall': {
      width: '96px',
      height: '160px',
      borderRadius: '8px'
    },
    '& $toast': {
      left: 'auto',
      width: '80%',
      margin: 'auto'
    }
  },

  widgetDiv: {
    position: 'inherit',
    width: '376px',
    height: '592px',
    border: 'none',
    borderRadius: '8px',
    boxShadow: '0 9px 15px -7px rgba(33, 34, 66, 0.04), 0 9px 46px 8px rgba(33, 34, 66, 0.08), 0 24px 38px 3px rgba(33, 34, 66, 0.12)',
    backgroundColor: colors.white,
    overflow: 'hidden'
  },

  widgetIcon: {
    cursor: 'pointer',
    width: '56px',
    height: '56px',
    borderRadius: '32px',
    backgroundColor: colors.purple300,
    backgroundImage: `url(${widgetIcon})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
  },

  widgetHeader: {
    position: 'absolute',
    top: '0',
    display: 'flex',
    flexDirection: 'row-reverse',
    alignItems: 'center',
    width: '100%',
    height: '48px',
    backgroundColor: colors.navy800,
  },

  userDiv: {
    display: 'flex',
    flexDirection: 'row-reverse'
  },

  headerInfo: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  },

  headerUserId: {
    color: colors.white
  },

  headerNickname: {
    display: 'none',
    color: colors.navy200
  },

  menuItems: {
    position: 'absolute',
    top: '40px',
    right: '0',
    paddingTop: '8px',
    paddingBottom: '8px',
    paddingLeft: '0px',
    paddingRight: '0px',
    width: '200px',
    borderRadius: '4px',
    boxShadow: '0 3px 5px -3px rgba(33, 34, 66, 0.04), 0 3px 14px 2px rgba(33, 34, 66, 0.08), 0 8px 10px 1px rgba(33, 34, 66, 0.12)',
    backgroundColor: colors.white
  },

  menuItem: {
    display: 'block',
    boxSizing: 'border-box',
    paddingTop: '0px',
    paddingBottom: '0px',
    paddingLeft: '16px',
    paddingRight: '16px',
    width: '100%',
    textAlign: 'left',
    '&:hover': {
      backgroundColor: colors.navy50
    }
  },

  headerDivider: {
    width: '1px',
    height: '20px',
    marginLeft: '8px',
    marginRight: '16px',
    backgroundColor: colors.navy900
  },

  headerButtons: {
    marginLeft: '14px'
  },

  settingsButton: {
    position: 'relative',
    marginLeft: '2px',
    marginRight: '2px',
    width: '40px',
    height: '40px',
    borderRadius: '4px',
    cursor: 'pointer',
    backgroundImage: `url(${settingsIcon})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    '&:hover': {
      backgroundColor: colors.navy900
    }
  },

  closeButton: {
    display: 'none',
    marginLeft: '2px',
    marginRight: '2px',
    width: '48px',
    height: '48px',
    borderRadius: '4px',
    cursor: 'pointer',
    backgroundImage: `url(${widgetCloseIcon})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
  },

  logoMidBlack: {
    width: '56px',
    height: '56px',
    marginBottom: '8px',
    backgroundImage: `url(${logoMidBlack})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
  },

  dialDesc: {
    marginBottom: '32px'
  },

  btnVideo: {
    backgroundImage: `url(${videoPurpleIcon})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    border: `solid 1px ${colors.purple300}`
  },

  btnAudio: {
    backgroundImage: `url(${audioIcon20})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundColor: colors.purple300
  },

  welcomeDiv: {}
};

const sheet = jss.createStyleSheet(styles, {
  link: true
});
const classes = sheet.classes;

export { jss, sheet, classes };
