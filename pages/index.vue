<template>
  <div>
    <b-row no-gutters>
      <b-col lg='6' md='12' v-for='(service, index) in services' v-bind:key='service'>
        <b-card class='serviceCard'>
          <b-card-title>
            {{service.title}} {{service.status}}
          </b-card-title>
          <template v-slot:footer>
            <b-button :href='service.url' variant='dark'>
              Open
            </b-button>
          </template>

        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
    export default {
        name: "index",
        data() {
            return {
                services: [
                    {
                        title: 'Portainer',
                        url: 'https://portainer.meka.systems'
                    },
                    {
                        title: 'Personal Website',
                        url: 'https://danielszabo.me'
                    },
                    {
                        title: 'Personal Blog',
                        url: 'https://blog.danielszabo.me'
                    },
                    {
                        title: 'File Drive',
                        url: 'https://drive.meka.systems'
                    },
                    {
                        title: 'Click-Clack.cc',
                        url: 'https://click-clack.cc'
                    },
                    {
                        title: 'Network Admin Panel',
                        url: 'http://meka.systems:8085'
                    }
                ]
            }
        },
        created() {
            if (process.client) {
                for (let i = 0; i < this.services.length; i++) {
                    var request = new XMLHttpRequest();
                    request.onreadystatechange = function () {
                        if (request.readyState === 4) {
                            this.services[i].status = request.status;
                        }
                    };
                    request.open("GET", this.services[i].url, true);
                    request.send();
                }
            }
        },
        methods() {
        }
    }
</script>

<style scoped>

  @font-face {
    font-family: "Do Hyeon";
    src: url('/DoHyeon.ttf');
    font-weight: normal;
    font-style: normal;
  }

  body, p {
    font-family: "Do Hyeon",serif;
    color: #5c5c5c;
  }

  .serviceCard {
    margin: 1rem;
  }
</style>