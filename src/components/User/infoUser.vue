<template>
  <div>
    <div
      class="modal fade"
      id="staticBackdrop"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="staticBackdropLabel">
              Modifier l'utilisateur
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <form>
              <div class="user-form">
                <div class="form-group">
                  <label for="email">Email :</label>
                  <input
                    type="email"
                    id="email"
                    v-model="user.email"
                    required
                  />
                </div>
                <div class="form-group">
                  <label for="name">Nom :</label>
                  <input type="text" id="name" v-model="user.name" required />
                </div>
                <div class="form-group">
                  <label for="username">Prenom :</label>
                  <input
                    type="text"
                    id="surname"
                    v-model="user.surname"
                    required
                  />
                </div>
                <button
                  class="btn btn-info"
                  type="button"
                  @click="editUser(this.id)"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                >
                  Modifier
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

    <div class="parent-div">
      <input type="checkbox" name="" id="menu-toggle" />
      <div class="overlay">
        <label for="menu-toggle">
          <span class="bx bx-x"></span>
        </label>
      </div>
      <div class="sidebar">
        <div class="sidebar-container">
          <div class="brand">
            <h2>
              <span class="bx bxs-doughnut-chart"></span> Hello {{ user.name }}
            </h2>
          </div>
          <div class="sidebar-avartar">
            <div>
              <img src="../../assets/user-circle-regular-24.png" alt="time" />
            </div>
            <div class="avartar-info">
              <div class="avartar-text">
                <h6>{{ user.surname }} {{ user.name }}</h6>
                <small>{{ user.email }}</small>
              </div>
              <span class="bx bxs-chevron-down"></span>
            </div>
          </div>
          <div class="sidebar-menu">
            <ul>
              <li>
                <a href="#">
                  <span class="bx bx-bar-chart-alt"></span>
                  <span>Charts</span>
                </a>
              </li>
              <li>
                <router-link to="#">
                  <span class="bx bxs-user-badge"></span>
                  <span>Je Badge</span>
                </router-link>
              </li>
              <li>
                <router-link to="profile" @click="showMain">
                  <span class="bx bx-user-circle"></span>
                  <span>Mon Profile</span>
                </router-link>
              </li>
              <li>
                <a href="#">
                  <span class="bx bx-timer"></span>
                  <span>Mes Heures</span>
                </a>
              </li>
            </ul>
          </div>
          <div class="sidebar-card">
            <div class="side-card-icon">
              <span class="bx bxs-pie-chart-alt-2"></span>
            </div>
            <div>
              <h4>Make AdSense</h4>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit!</p>
            </div>
            <button class="btn-block">Create Now</button>
          </div>
        </div>
      </div>
      <div class="main-content">
        <RouterView />
       <div class="show" v-if="show_main" >
              <main>
                <section>
                  <h3 class="section-head">Mes Heures</h3>
                  <div class="analystics">
                    <div class="analystic">
                      <div class="analystic-icon">
                        <span class="bx bx-low-vision"></span>
                      </div>
                      <div class="analystic-info">
                        <h4>la journée </h4>
                        <h1>0(hrs)</h1>
                      </div>
                    </div>
                    <div class="analystic">
                      <div class="analystic-icon">
                        <span class="bx bx-low-vision"></span>
                      </div>
                      <div class="analystic-info">
                        <h4>la semaine </h4>
                        <h1>10(hrs)</h1>
                      </div>
                    </div>
                    <div class="analystic">
                      <div class="analystic-icon">
                        <span class="bx bx-low-vision"></span>
                      </div>
                      <div class="analystic-info">
                        <h4>Le mois</h4>
                        <h1>0(hrs)</h1>
                      </div>
                    </div>
              
                    <div class="analystic">
                      <div class="analystic-icon">
                        <span class="bx bx-low-vision"></span>
                      </div>
                      <div class="analystic-info">
                        <h4>La année</h4>
                        <h1>1450(hrs)</h1>
                      </div>
                    </div>
                  </div>
                </section>
                <section>
                  <div class="block-grid">
                    <div class="revenu-card">
                      <h3 class="section-head">Total</h3>
                      <div class="rev-content">
                        <img src="../../assets/logo.png" alt="" />
                        <div class="revenu-info">
                          <h3>Axel Ouahmane</h3>
                          <h1>35.45m <small>super</small></h1>
                        </div>
                        <div class="rev-sum">
                          <h4>Total income</h4>
                          <h2>70,859€</h2>
                        </div>
                      </div>
                    </div>
                    <div class="graph-card">
                      <h3 class="section-head">Graph</h3>
                      <div class="graph-content">
                        <div class="graph-head">
                          <div class="icon-wrapper">
                            <div class="icon">
                              <span class="bx bxs-time"></span>
                            </div>
                            <div class="icon">
                              <span class="bx bx-low-vision"></span>
                            </div>
                          </div>
                          <div class="graph-select">
                            <select name="" id="">
                              <option value="">September</option>
                            </select>
                          </div>
                        </div>
                        <div class="graph-board">
                          <canvas id="myChart" width="100%" height="50px"></canvas>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </main>
       </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import "boxicons";
import moment from "moment";
import "moment-timezone";
// import myChart from "../Charts/Charts.vue";
import * as bootstrap from "bootstrap";
import "bootstrap";
import { onMounted } from "vue";
window.bootstrap = bootstrap;
let myModal;

export default {
  setup() {
    onMounted(() => {
      myModal = new bootstrap.Modal(document.getElementById("staticBackdrop"));
    });

    const showModel = () => {
      console.log("tes");
      myModal.show();
    };

    return {
      // ...autres variables et méthodes que vous retournez
      showModel,
    };
  },
  name: "infoUser",
  data() {
    return {
      id: null,
      user: {
        name: "",
        email: "",
        surname: "",
      },
      workingTimeData: {
        start: "",
        end: "",
        user_id: "",
      },
      allWorkingTimes: {},
      showWorkingTimes: false,
      dashStart: "",
      dashEnd: "",
      chartData: {},
      chartExist: false,
      componentKey: 0,
      show_main:true
    };
  },
  components: {
    // myChart,
  },
  mounted() {
    console.log(this.$route.params.id);
    this.id = this.$route.params.id;
    // this.getUser( this.id);
    this.getUser();
  },
  methods: {
    showMain() {
      this.show_main=false
    },
    async getUser() {
      try {
        // Effectuer une requête GET pour obtenir les détails de l'utilisateur
        const response = await axios.get(
          `http://localhost:4000/api/users/${this.id}`
        );
        console.log(
          "Détails de l'utilisateur récupérés avec succès:",
          response.data
        );
        this.user = response.data;
        // Mettez en œuvre la logique nécessaire après avoir obtenu les détails de l'utilisateur ici
      } catch (error) {
        console.error(
          "Erreur lors de la récupération des détails de l'utilisateur :",
          error
        );
      }
    },
    async editUser(id) {
      try {
        // const dataToUpdate = {
        //   email: this.user.email,
        //   name:this.user.name,
        //   surname:this.user.surname
        // };

        // Effectuer une requête PUT pour mettre à jour l'utilisateur existant
        const response = await axios.put(
          `http://localhost:4000/api/users/${id}`,
          { user: this.user }
        );

        console.log("Utilisateur mis à jour avec succès :", response.data);
        // Mettez en œuvre la logique nécessaire après la mise à jour de l'utilisateur ici
        this.isEditing = false;
      } catch (error) {
        console.error(
          "Erreur lors de la mise à jour de l'utilisateur :",
          error
        );
      }
    },
    async logoutUser() {
      const token = JSON.parse(localStorage.getItem("token"));
      const headers = {
        Authorization: `Bearer ${token}`,
      };
      await axios.delete("http://localhost:4000/api/auth", {
        headers,
      });
      localStorage.clear();
      this.$router.push({ name: "home" });
    },

    async createClock(user_id) {
      try {
        const currentDate = moment().tz("Europe/Paris");
        const data = {
          time: currentDate.add(1, "hours"),
        };
        console.log(data);
        const response = await axios.post(
          `http://localhost:4000/api/clocks/${user_id}`,
          { clock: data }
        );
        console.log("Clock créée avec succès:", response.data);
        if (response.data.status) {
          localStorage.setItem("start", JSON.stringify(response.data.time));
        } else if (!response.data.status) {
          // const today = moment().format('YYYY-MM-DD H:mm');
          this.workingTimeData.start = JSON.parse(
            localStorage.getItem("start")
          );
          this.workingTimeData.user_id = user_id;
          this.workingTimeData.end = response.data.time;
          console.log(this.workingTimeData);
          axios
            .post(`http://localhost:4000/api/working_times/${user_id}`, {
              working_time: this.workingTimeData,
            })
            .then((response) => {
              console.log("Working time créé avec succès:", response.data);
              localStorage.clear();
            })
            .catch((error) => {
              console.error(
                "Erreur lors de la création du working time :",
                error
              );
            });
        }
      } catch (error) {
        console.error("Erreur lors de la création de la clock :", error);
      }
    },

    async getWorkingTimes(id) {
      try {
        // Effectuer une requête GET pour obtenir les détails de l'utilisateur
        const response = await axios.get(
          `http://localhost:4000/api/working_timesAll/${id}`
        );
        this.allWorkingTimes = response.data;
        console.log(this.allWorkingTimes);
        // Mettez en œuvre la logique nécessaire après avoir obtenu les détails de l'utilisateur ici
      } catch (error) {
        console.error(
          "Erreur lors de la récupération des temps de travail :",
          error
        );
      }
    },

    calculateWorkingDuration(start, end) {
      const startTime = moment(start);
      const endTime = moment(end);
      const durationMs = endTime.diff(startTime); // Différence en millisecondes
      const duration = moment.duration(durationMs);

      const hours = duration.hours().toString().padStart(2, "0");
      const minutes = duration.minutes().toString().padStart(2, "0");
      const seconds = duration.seconds().toString().padStart(2, "0");

      const formattedDuration = `${hours}:${minutes}:${seconds}`;

      return formattedDuration;
    },
    formatWorkingTime(date) {
      return moment(date).subtract(1, "hour").format("YYYY-MM-DD HH:mm:ss");
    },
    async showDashboard(user_id, startDate, endDate) {
      const start = moment(startDate).format("YYYY-MM-DD HH:mm:ss");
      const end = moment(endDate).format("YYYY-MM-DD HH:mm:ss");
      try {
        const response = await axios.get(
          `http://localhost:4000/api/working_times/${user_id}?start=${start}&end=${end}`
        );

        const workByDay = {};
        const workingTimes = response.data;

        for (const workingTime of workingTimes) {
          const start = new Date(workingTime.start);
          const end = new Date(workingTime.end);
          const day = start.toDateString();
          const timeDiff = end - start;
          workByDay[day] = (workByDay[day] || 0) + timeDiff;
        }

        const labels = Object.keys(workByDay);
        const data = labels.map((day) => workByDay[day]);

        this.chartData = {
          chartTitle: "Your working time",
          chartLabels: labels,
          chartValues: data,
        };

        this.chartExist = true;
      } catch (error) {
        console.error("Erreur lors de la récupération des données :", error);
      }

      this.componentKey += 1;
    },
  },
};
</script>

<style>
.info {
  width: 200px;
  height: 100vh;
  background-color: #eee;
}
.info .box {
  color: #000;
  width: 100%;
  height: 50px;
  margin: 20px auto;
  display: flex;
  align-items: center;
}
</style>
