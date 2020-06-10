import React from "react";
import Vimeo from "@u-wave/react-vimeo";
import { getAlbum } from "../services/vimeo";
import FormControl from "@material-ui/core/FormControl";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import Switch from "react-switch";
import firebase from "../utils/firebase";
import { logoutUser } from "../actions/actions";
import "./vimeo.css";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
// import { Icon } from "@material-ui/core";

class VimeoPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playList: null,
      playSelected: 0,
      enableAutoPlay: true,
      autoPlay: false,
      showMaterials: false,
      materials: null,
      pickerValues: [],
      pickSelected: 0,
      showNoPremiumModal: false,
    };
  }

  // topFunction() {
  //     const doc= document.body.scrollTop = "0",
  //     const doc2=document.documentElement.scrollTop = "0"
  // }

  _getMaterial = async () => {
    const ruta = await this.state.playList.info[this.state.playSelected].name;
    const db = await firebase.app().storage();
    let items = [];
    const name = this.state.pickerValues[this.state.pickSelected].displayName;
    const res = await db.ref(`/${name}/${ruta}`).listAll();
    if (res.items && res.items.length > 0) {
      res.items.map(async (el, ind) => {
        let obj = {
          name: el.name,
          url: el.fullPath,
          download: await el.getDownloadURL(),
          type: el.getMetadata(),
        };
        items.push(obj);
        return null;
      });
    }
    // console.log("debuggin: ", res);
    // console.log("materials: ", items);
    return this.setState({ materials: items });
  };

  async componentDidMount() {
    const ciclo = await JSON.parse(localStorage.getItem("ciclo2"));

    if (Object.keys(this.props.auth).length > 2) {
      // console.log("ciclo: ", JSON.stringify(ciclo));
      // console.log("authentication: ", JSON.stringify(this.props.auth));
      if (ciclo) {
        if (ciclo && ciclo.responseCode === 0 && ciclo.document) {
          // console.log("entro al if");
          if (ciclo.document.cursos && ciclo.document.cursos.length > 0) {
            let arr = [];
            ciclo.document.cursos.map((el, ind) => {
              //   console.log(el);
              arr.push({
                ind: ind,
                displayName: el.nombre,
                id: el.albumID,
              });
              return null;
            });
            this.setState({ pickerValues: arr });
          }
          await this._getAlbum(ciclo.document.cursos[0].albumID);
          await this._getMaterial();
        } else {
          console.log("entro al else");
        }
      }
    } else {
      window.location.href = "./login";
    }
    // console.log(this.props.auth);
  }

  async _getAlbum(id) {
    let mayor = 1;
    let data;
    await getAlbum(id).then((res) => {
      if (res.info) {
        res.info.map((el, ind) => {
          let i = el.name.indexOf(" ");
          let num = parseFloat(String(el.name).substr(0, i));
          // console.log("THIS num: " + num + " i " + i);
          if (Number(num) || num === 0) {
            if (num > mayor) {
              mayor = num;
            }
            if (el.name.indexOf("Presentación") >= 0) {
              el.num = -1;
            } else {
              el.num = num === 0 ? ind / 100 : Number(num);
            }
          } else {
            el.num = mayor * 100 + ind;
          }
          return null;
        });
        data = res;
      }
    });

    return await this.setState(
      {
        playList: data,
      },
      async () => await this._getMaterial()
    );
  }
  rendermaterial = () => {
    if (this.state.materials) {
      return this.state.materials.map((el, ind) => {
        // console.log(el);
        return (
          <div key={ind}>
            <a rel="noopener noreferrer" target="_blank" href={el.download}>
              {el.name}
            </a>
          </div>
        );
      });
    }
  };

  showMaterials = () => {
    return (
      <div className="fondoGrisRep">
        <div
          className="row"
          style={{
            justifyContent: "center",
            alignContent: "center",
            height: "100%",
          }}
        >
          <div className="caja">
            <div
              className="cabeceracaja"
              style={{ justifyContent: "center", alignContent: "center" }}
            >
              <h1>Descarga los materiales</h1>
              <div
                className="cerrar"
                onClick={() => this.setState({ showMaterials: false })}
              >
                <img alt="img" src="./assets/icons/cerrar.png" width="20" />
              </div>
            </div>
            <div className="bodycaja">
              <div style={{ paddingTop: 18 }}>{this.rendermaterial()}</div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  _noPremiumModal = () => {
    return (
      <div
        className="fondoGrisRep"
        style={{
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          height: "100%",
          width: "100%",
        }}
      >
        <div
          className="row"
          style={{
            justifyContent: "center",
            alignContent: "center",
            height: "100%",
            position: "fixed",
          }}
        >
          <div className="caja">
            <div
              className="cabeceracaja"
              style={{ justifyContent: "flex-end" }}
            >
              <div
                className="cerrar"
                onClick={() => this.setState({ showNoPremiumModal: false })}
              >
                <img alt="img" src="./assets/icons/cerrar.png" width="20" />
              </div>
            </div>
            <div className="bodycaja">
              <div
                style={{
                  paddingTop: 18,
                  justifyContent: "center",
                  display: "flex",
                  flexFlow: "column",
                }}
              >
                <label
                  style={{
                    textAlign: "center",
                    width: "100%",
                    marginBottom: 18,
                    fontSize: 16,
                  }}
                >
                  Lo sentimos, función no habilitada para usuarios gratuitos.
                </label>
                <h1
                  style={{
                    textAlign: "center",
                    fontSize: 20,
                    marginBottom: 18,
                  }}
                >
                  ¡Anímate a esta nueva experiencia y matricúlate ahora!
                </h1>
                <Link
                  style={{ alignSelf: "center", width: "70%" }}
                  to={"/pago"}
                >
                  <div
                    style={{
                      height: 65,
                      backgroundColor: "#E3085C",
                      color: "white",
                      textAlign: "center",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 24,
                    }}
                  >
                    Comprar
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  _renderVimeoLayout = () => {
    const { auth } = this.props;

    if (
      this.state.playList &&
      this.state.playList.info &&
      this.state.playList.info.length > 0
    ) {
      // console.log("reproduciendo: ", this.state.playList.info);
      return (
        <div>
          <Vimeo
            id="getvimeo"
            video={this.state.playList.info[this.state.playSelected].id}
            autoplay={this.state.autoPlay}
            responsive
            onEnd={async () => {
              if (this.state.autoPlay) {
                if (
                  this.state.playSelected !==
                  this.state.playList.info.length - 1
                ) {
                  if (auth.user.isPremium) {
                    this.setState({
                      playSelected: this.state.playSelected + 1,
                    });
                  } else {
                    if (this.state.playSelected < 3) {
                      this.setState({
                        playSelected: this.state.playSelected + 1,
                      });
                    } else {
                      this.setState({ showNoPremiumModal: true });
                    }
                  }
                }
              }
              await this._getMaterial();
            }}
            height={250}
          />
          <div
            className="row"
            style={{
              height: "100%",
              width: "100%",
              backgroundColor: "#333333",
              marginTop: 12,
              marginLeft: 2,
              display: "flex",
              alignItems: "center",
              padding: 12,
              justifyContent: "space-between",
            }}
          >
            {this.state.playList &&
              this.state.playList.info &&
              this.state.playList.info.length > 0 && (
                <label
                  className="font-rep"
                  style={{ color: "white", fontSize: 18 }}
                >
                  {this.state.playList.info[this.state.playSelected].name}
                </label>
              )}
          </div>
          <div
            style={{
              height: "100%",
              width: "100%",
              backgroundColor: "rgb(40, 40, 40)",
              margin: "auto",
              marginTop: 12,
              display: "flex",
              // flexWrap: "wrap",
              alignItems: "center",
              // padding: "15px 10px 20px 50px",
              marginBottom: 30,
              justifyContent: "space-around",
            }}
          >
            <div
              // className="margin-left-responsive"
              style={{
                // marginRight: 8,
                // marginTop: 5,
                cursor: "pointer",
                fontSize: 18,
                color: "#1d99f1",
              }}
            >
              <SkipPreviousIcon />
              <label
                className="redim"
                style={{ color: "white", margin: 0, cursor: "pointer" }}
                onClick={async () => {
                  if (this.state.playSelected === 0) {
                    await this._getMaterial();
                    return null;
                  } else {
                    await this.setState({
                      playSelected: this.state.playSelected - 1,
                    });
                    await this._getMaterial();
                  }
                }}
              >
                Anterior
              </label>
            </div>
            <div
              style={{
                // marginRight: 8,
                // marginTop: 5,
                cursor: "pointer",
                fontSize: 18,
                color: "#1d99f1",
              }}
            >
              <label
                className="redim"
                style={{ color: "white", margin: 0, cursor: "pointer" }}
                onClick={async () => {
                  if (
                    this.state.playSelected ===
                    this.state.playList.info.length - 1
                  ) {
                    await this._getMaterial();
                    return null;
                  } else {
                    await this.setState({
                      playSelected: this.state.playSelected + 1,
                    });
                    return await this._getMaterial();
                  }
                }}
              >
                Siguiente
              </label>
              <SkipNextIcon />
            </div>
          </div>
          <div
            className="col-ms-6"
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              className="label-white"
              style={{
                marginRight: 10,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Button
                variant="contained"
                onClick={() =>
                  auth.user.isPremium
                    ? window.open(
                        "https://wa.me/51928374979?text=Hola%2C%20tengo%20una%20duda%20con%20un%20problema",
                        "_blank"
                      )
                    : this.setState({ showNoPremiumModal: true })
                }
                style={{
                  backgroundColor: "#1178F2",
                  color: "#fff",
                  width: 120,
                  textAlign: "center",
                }}
              >
                ASESORÍA{" "}
              </Button>
            </div>
            <div
              className="label-white"
              style={{
                marginRight: 10,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Button
                variant="contained"
                onClick={async () => {
                  this.setState({ showMaterials: true });
                }}
                style={{
                  backgroundColor: "#1178F2",
                  color: "white",
                  width: 120,
                  textAlign: "center",
                }}
              >
                <AttachFileIcon />
                Materiales
              </Button>
            </div>
          </div>
        </div>
      );
    }
  };

  _renderListLayout = () => {
    if (
      this.state.playList &&
      this.state.playList.info &&
      this.state.playList.info.length > 0
    ) {
      // console.log("info: ", this.state.playList.info);
      let orden = this.state.playList.info.sort((a, b) =>
        a.num > b.num ? 1 : -1
      );
      return orden.map((el, ind) => {
        return (
          <div
            key={ind}
            style={{
              height: 55,
              width: "100%",
              marginBottom: 8,
              color: "white",
              display: "flex",
              // justifyContent:'center',
              alignItems: "center",
              padding: 4,
              cursor: "pointer",
              borderRightColor: "#1d99f1",
              borderRightWidth: this.state.playSelected === ind ? 3 : 0,
              borderRightStyle: "solid",
              fontSize: 13,
            }}
            onClick={async () => {
              if (this.props.auth.user.isPremium) {
                window.scrollTo(0, 0);
                await this.setState({
                  playSelected: ind,
                });
              } else {
                if (ind >= 4) {
                  this.setState({ showNoPremiumModal: true });
                } else {
                  window.scrollTo(0, 0);
                  await this.setState({
                    playSelected: ind,
                  });
                }
              }
              await this._getMaterial();
            }}
          >
            {this.state.playSelected === ind && <div id="triangle-right"></div>}

            {String(el.name).toUpperCase()}
          </div>
        );
      });
    }
  };
  icon() {
    return (
      <svg
        style={{
          width: 30,
          heigh: 45,
          marginRight: 15,
          height: "100%",
          color: "#1d99f1",
        }}
        aria-hidden="true"
        focusable="false"
        data-prefix="fas"
        data-icon="caret-down"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 320 512"
        class="svg-inline--fa fa-caret-down fa-w-10 fa-3x"
      >
        <path
          fill="currentColor"
          d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
          className=""
        ></path>
      </svg>
    );
  }
  render() {
    console.log("autoPlay: ", this.state.autoPlay);
    console.log("values: ", this.state.pickerValues[0]);
    console.log("selected: ", this.state.pickSelected);
    return (
      <div
        id="vimeo-container"
        style={{
          display: "flex",
          height: "80 .8%",
          backgroundColor: "#282828",
        }}
      >
        {this.state.showMaterials ? this.showMaterials() : null}

        {this.state.showNoPremiumModal ? this._noPremiumModal() : null}

        <div
          id="vimeo-row-1"
          style={{
            backgroundColor: "#282828",
            padding: 16,
          }}
        >
          {this._renderVimeoLayout()}
        </div>
        <div
          id="vimeo-row-2"
          style={{
            backgroundColor: "#282828",
            padding: 12,
          }}
        >
          <div>
            <div
              style={{
                flexDirection: "row",
                display: "flex",
              }}
            >
              <div
                style={{
                  color: "white",
                  fontSize: 16,
                  flex: 2,
                  height: 55,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              ></div>
              <div
                style={{
                  flex: 1,
                  display: "flex",
                  flexFlow: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "white",
                }}
              >
                autoplay
                <div style={{ width: 8 }} />
                <Switch
                  checked={this.state.autoPlay}
                  onChange={(e) => {
                    this.setState({ autoPlay: e });
                  }}
                  onColor={"#1d99f1"}
                  uncheckedIcon={false}
                  checkedIcon={false}
                  height={17}
                  width={34}
                />
              </div>
            </div>
            <div
              style={{
                flexDirection: "row",
                display: "flex",
              }}
            >
              <div
                // className="elegir-curso"
                style={{
                  color: "white",
                  fontSize: 25,
                  flex: 2,
                  height: 55,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                Elegir Curso
              </div>
            </div>
          </div>

          {this.state.pickerValues.length > 0 ? (
            <FormControl className="vimeo-selecter">
              <Select
                // style={{
                //   borderBottomColor: "white"
                // }}
                value={this.state.pickSelected}
                // IconComponent={this.icon}
                onChange={async (e) => {
                  if (this.state.pickSelected !== e.target.value) {
                    await this.setState({
                      pickSelected: e.target.value,
                      playSelected: 0,
                      playList: null,
                    });
                  }
                  return await this._getAlbum(
                    this.state.pickerValues[e.target.value].id
                  );
                }}
              >
                {this.state.pickerValues.map((el, ind) => {
                  return (
                    <MenuItem
                      key={"menuItem" + ind}
                      style={{
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                      value={ind}
                    >
                      {el.displayName}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
          ) : null}
          <div
            style={{
              backgroundColor: "#333333",
            }}
          >
            {this._renderListLayout()}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  ciclo: state.ciclo,
});

export default connect(mapStateToProps, { logoutUser })(VimeoPlayer);
