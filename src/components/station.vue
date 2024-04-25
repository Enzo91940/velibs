<template>

  <v-container>
    <v-table>
      <thead>
        <th>Département </th>
      </thead>
      <tbody>
        <td><v-checkbox label="92" value="21" v-model="selectFiltre" @change="afficherFiltre();"></v-checkbox></td>
        <td><v-checkbox label="93" value="31" v-model="selectFiltre" @change="afficherFiltre();"></v-checkbox></td>
        <td><v-checkbox label="94" value="41" v-model="selectFiltre" @change="afficherFiltre();"></v-checkbox></td>
        <td><v-checkbox label="95" value="51" v-model="selectFiltre" @change="afficherFiltre();"></v-checkbox></td>
      </tbody>
    </v-table>
  </v-container>
  <v-container>
    <v-table>
      <thead>
        <th>Arrondissements</th>
      </thead>
      <tbody>
        <td><v-checkbox label="1" v-model="selectFiltre" value="1" @change="afficherFiltre();"></v-checkbox></td>
        <td><v-checkbox label="2" v-model="selectFiltre" value="2" @change="afficherFiltre();"></v-checkbox></td>
        <td><v-checkbox label="3" v-model="selectFiltre" value="3" @change="afficherFiltre();"></v-checkbox></td>
        <td><v-checkbox label="4" v-model="selectFiltre" value="4" @change="afficherFiltre();"></v-checkbox></td>
        <td><v-checkbox label="5" v-model="selectFiltre" value="5" @change="afficherFiltre();"></v-checkbox></td>
        <td><v-checkbox label="6" v-model="selectFiltre" value="6" @change="afficherFiltre();"></v-checkbox></td>
        <td><v-checkbox label="7" v-model="selectFiltre" value="7" @change="afficherFiltre();"></v-checkbox></td>
        <td><v-checkbox label="8" v-model="selectFiltre" value="8" @change="afficherFiltre();"></v-checkbox></td>
        <td><v-checkbox label="9" v-model="selectFiltre" value="9" @change="afficherFiltre();"></v-checkbox></td>
        <td><v-checkbox label="10" v-model="selectFiltre" value="10" @change="afficherFiltre();"></v-checkbox></td>
        <td><v-checkbox label="11" v-model="selectFiltre" value="11" @change="afficherFiltre();"></v-checkbox></td>
        <td><v-checkbox label="12" v-model="selectFiltre" value="12" @change="afficherFiltre();"></v-checkbox></td>
        <td><v-checkbox label="13" v-model="selectFiltre" value="13" @change="afficherFiltre();"></v-checkbox></td>
        <td><v-checkbox label="14" v-model="selectFiltre" value="14" @change="afficherFiltre();"></v-checkbox></td>
        <td><v-checkbox label="15" v-model="selectFiltre" value="15" @change="afficherFiltre();"></v-checkbox></td>
        <td><v-checkbox label="16" v-model="selectFiltre" value="16" @change="afficherFiltre();"></v-checkbox></td>
        <td><v-checkbox label="17" v-model="selectFiltre" value="17" @change="afficherFiltre();"></v-checkbox></td>
        <td><v-checkbox label="18" v-model="selectFiltre" value="18" @change="afficherFiltre();"></v-checkbox></td>
        <td><v-checkbox label="19" v-model="selectFiltre" value="19" @change="afficherFiltre();"></v-checkbox></td>
        <td><v-checkbox label="20" v-model="selectFiltre" value="20" @change="afficherFiltre();"></v-checkbox></td>
      </tbody>
    </v-table>
  </v-container>
  <v-container>
    <v-table>
      <thead>
        <th>Autres</th>
      </thead>
      <tbody>
        <td><v-checkbox label="Mobile" value="92" v-model="selectFiltre" @change="afficherFiltre()"></v-checkbox></td>
      </tbody>
    </v-table>
  </v-container>
  <h1>
    <center>
      <th> Station Code : {{ stationcode }}</th>
    </center>
  </h1>
  <div class="container">
    <div class="left-column">
      <p> Nom : {{ name }}</p>
      <p>Ville : {{ nom_arrondissement_communes }}</p>
      <p>Ouvert : {{ is_returning }}</p>
    </div>
    <div class="right-column">
      <p>Capacité : {{ capacity }}</p>
      <p>Vélos Disponible : {{ numdocksavailable }}</p>
      <p>Attaches Disponibles : {{ numbikesavailable }}</p>
      <p>Carte Bleu : {{ is_renting }}</p>
    </div>
  </div>
  <div>

    <table>
      <thead>
        <tr>
          <th>Numéro</th>
          <th>Nom</th>
          <th>CB</th>
          <th>Ouvert</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in this.$store.state.donneeEnCours" :key="item.numero" @click="selectItem(item)">
          <td>{{ item.stationcode }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.is_renting }}</td>
          <td>{{ item.is_returning ? 'Ouvert' : 'Fermé' }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'stationProjet',

  methods: {
    selectItem(item) {
      this.$store.state.stationChoisi = item;
      this.$parent.maj++;
      console.log("Station Choisie : ", this.$store.state.stationChoisi);
    },
    afficherFiltre() {
      this.$store.state.donneeEnCours = [];
      let currentStationCodes = Object.values(this.$store.state.donneeVelib).map(data => data.stationcode);

      if (this.selectFiltre == 1) {
        this.selectFiltre = Number("1");
        let stationFiltre = currentStationCodes.filter(code => {
          return code &&
            code.length == 4 &&
            code.charAt(0) === this.selectFiltre.toString()
        });
        stationFiltre.forEach((stationCode) =>{
          for(var i=0 ; i<this.$store.state.donneeVelib.length; i++){
            if(this.$store.state.donneeVelib[i].stationcode ==stationCode){
              this.$store.state.donneeEnCours.push(this.$store.state.donneeVelib[i])
            }
          }
        });
      
      }

      else if (this.selectFiltre == 2) {
        this.selectFiltre = Number("2");
        let stationFiltre = currentStationCodes.filter(code => {
          return code &&
            code.length == 4 &&
            code.charAt(0) === this.selectFiltre.toString()
        });
        
        stationFiltre.forEach((stationCode) =>{
          for(var i=0 ; i<this.$store.state.donneeVelib.length; i++){
            if(this.$store.state.donneeVelib[i].stationcode ==stationCode){
              this.$store.state.donneeEnCours.push(this.$store.state.donneeVelib[i])
            }
          }
        });
      }
      else if (this.selectFiltre == 3) {
        this.selectFiltre = Number("3");
        let stationFiltre = currentStationCodes.filter(code => {
          return code &&
            code.length == 4 &&
            code.charAt(0) === this.selectFiltre.toString()
        });
        
        stationFiltre.forEach((stationCode) =>{
          for(var i=0 ; i<this.$store.state.donneeVelib.length; i++){
            if(this.$store.state.donneeVelib[i].stationcode ==stationCode){
              this.$store.state.donneeEnCours.push(this.$store.state.donneeVelib[i])
            }
          }
        });
      }
      else if (this.selectFiltre == 4) {
        this.selectFiltre = Number("4");
        let stationFiltre = currentStationCodes.filter(code => {
          return code &&
            code.length == 4 &&
            code.charAt(0) === this.selectFiltre.toString()
        });
        
        stationFiltre.forEach((stationCode) =>{
          for(var i=0 ; i<this.$store.state.donneeVelib.length; i++){
            if(this.$store.state.donneeVelib[i].stationcode ==stationCode){
              this.$store.state.donneeEnCours.push(this.$store.state.donneeVelib[i])
            }
          }
        });
      }
      else if (this.selectFiltre == 5) {
        this.selectFiltre = Number("5");
        let stationFiltre = currentStationCodes.filter(code => {
          return code &&
            code.length == 4 &&
            code.charAt(0) === this.selectFiltre.toString()
        });
        
        stationFiltre.forEach((stationCode) =>{
          for(var i=0 ; i<this.$store.state.donneeVelib.length; i++){
            if(this.$store.state.donneeVelib[i].stationcode ==stationCode){
              this.$store.state.donneeEnCours.push(this.$store.state.donneeVelib[i])
            }
          }
        });
      }
      else if (this.selectFiltre == 6) {
        this.selectFiltre = Number("6");
        let stationFiltre = currentStationCodes.filter(code => {
          return code &&
            code.length == 4 &&
            code.charAt(0) === this.selectFiltre.toString()
        });
       
        stationFiltre.forEach((stationCode) =>{
          for(var i=0 ; i<this.$store.state.donneeVelib.length; i++){
            if(this.$store.state.donneeVelib[i].stationcode ==stationCode){
              this.$store.state.donneeEnCours.push(this.$store.state.donneeVelib[i])
            }
          }
        });
      }
      else if (this.selectFiltre == 7) {
        this.selectFiltre = Number("7");
        let stationFiltre = currentStationCodes.filter(code => {
          return code &&
            code.length == 4 &&
            code.charAt(0) === this.selectFiltre.toString()
        });
       
        stationFiltre.forEach((stationCode) =>{
          for(var i=0 ; i<this.$store.state.donneeVelib.length; i++){
            if(this.$store.state.donneeVelib[i].stationcode ==stationCode){
              this.$store.state.donneeEnCours.push(this.$store.state.donneeVelib[i])
            }
          }
        });
      }
      else if (this.selectFiltre == 8) {
        this.selectFiltre = Number("8");
        let stationFiltre = currentStationCodes.filter(code => {
          return code &&
            code.length == 4 &&
            code.charAt(0) === this.selectFiltre.toString()
        });
        
        stationFiltre.forEach((stationCode) =>{
          for(var i=0 ; i<this.$store.state.donneeVelib.length; i++){
            if(this.$store.state.donneeVelib[i].stationcode ==stationCode){
              this.$store.state.donneeEnCours.push(this.$store.state.donneeVelib[i])
            }
          }
        });
      }
      else if (this.selectFiltre == 9) {
        this.selectFiltre = Number("9");
        let stationFiltre = currentStationCodes.filter(code => {
          return code &&
            code.length == 4 &&
            code.charAt(0) === this.selectFiltre.toString()
        });
       
        stationFiltre.forEach((stationCode) =>{
          for(var i=0 ; i<this.$store.state.donneeVelib.length; i++){
            if(this.$store.state.donneeVelib[i].stationcode ==stationCode){
              this.$store.state.donneeEnCours.push(this.$store.state.donneeVelib[i])
            }
          }
        });
      }
      else if (this.selectFiltre == 10) {
        this.selectFiltre = Number("10");
        let stationFiltre = currentStationCodes.filter(code => {
          return code &&
            code.length == 5 &&
            code.slice(0, 2) === this.selectFiltre.toString()
        });
        
        stationFiltre.forEach((stationCode) =>{
          for(var i=0 ; i<this.$store.state.donneeVelib.length; i++){
            if(this.$store.state.donneeVelib[i].stationcode ==stationCode){
              this.$store.state.donneeEnCours.push(this.$store.state.donneeVelib[i])
            }
          }
        });
      }
      else if (this.selectFiltre == 11) {
        this.selectFiltre = Number("11");
        let stationFiltre = currentStationCodes.filter(code => {
          return code &&
            code.length == 5 &&
            code.slice(0, 2) === this.selectFiltre.toString()
        });
        
        stationFiltre.forEach((stationCode) =>{
          for(var i=0 ; i<this.$store.state.donneeVelib.length; i++){
            if(this.$store.state.donneeVelib[i].stationcode ==stationCode){
              this.$store.state.donneeEnCours.push(this.$store.state.donneeVelib[i])
            }
          }
        });
      }
      else if (this.selectFiltre == 12) {
        this.selectFiltre = Number("12");
        let stationFiltre = currentStationCodes.filter(code => {
          return code &&
            code.length == 5 &&
            code.slice(0, 2) === this.selectFiltre.toString()
        });
        
        stationFiltre.forEach((stationCode) =>{
          for(var i=0 ; i<this.$store.state.donneeVelib.length; i++){
            if(this.$store.state.donneeVelib[i].stationcode ==stationCode){
              this.$store.state.donneeEnCours.push(this.$store.state.donneeVelib[i])
            }
          }
        });
      }
      else if (this.selectFiltre == 13) {
        this.selectFiltre = Number("13");
        let stationFiltre = currentStationCodes.filter(code => {
          return code &&
            code.length == 5 &&
            code.slice(0, 2) === this.selectFiltre.toString()
        });
        
        stationFiltre.forEach((stationCode) =>{
          for(var i=0 ; i<this.$store.state.donneeVelib.length; i++){
            if(this.$store.state.donneeVelib[i].stationcode ==stationCode){
              this.$store.state.donneeEnCours.push(this.$store.state.donneeVelib[i])
            }
          }
        });
      }
      else if (this.selectFiltre == 14) {
        this.selectFiltre = Number("14");
        let stationFiltre = currentStationCodes.filter(code => {
          return code &&
            code.length == 5 &&
            code.slice(0, 2) === this.selectFiltre.toString()
        });
        
        stationFiltre.forEach((stationCode) =>{
          for(var i=0 ; i<this.$store.state.donneeVelib.length; i++){
            if(this.$store.state.donneeVelib[i].stationcode ==stationCode){
              this.$store.state.donneeEnCours.push(this.$store.state.donneeVelib[i])
            }
          }
        });
      }
      else if (this.selectFiltre == 15) {
        this.selectFiltre = Number("15");
        let stationFiltre = currentStationCodes.filter(code => {
          return code &&
            code.length == 5 &&
            code.slice(0, 2) === this.selectFiltre.toString()
        });
        
        stationFiltre.forEach((stationCode) =>{
          for(var i=0 ; i<this.$store.state.donneeVelib.length; i++){
            if(this.$store.state.donneeVelib[i].stationcode ==stationCode){
              this.$store.state.donneeEnCours.push(this.$store.state.donneeVelib[i])
            }
          }
        });
      }
      else if (this.selectFiltre == 16) {
        this.selectFiltre = Number("16");
        let stationFiltre = currentStationCodes.filter(code => {
          return code &&
            code.length == 5 &&
            code.slice(0, 2) === this.selectFiltre.toString()
        });
        
        stationFiltre.forEach((stationCode) =>{
          for(var i=0 ; i<this.$store.state.donneeVelib.length; i++){
            if(this.$store.state.donneeVelib[i].stationcode ==stationCode){
              this.$store.state.donneeEnCours.push(this.$store.state.donneeVelib[i])
            }
          }
        });
      }
      else if (this.selectFiltre == 17) {
        this.selectFiltre = Number("17");
        let stationFiltre = currentStationCodes.filter(code => {
          return code &&
            code.length == 5 &&
            code.slice(0, 2) === this.selectFiltre.toString()
        });
        
        stationFiltre.forEach((stationCode) =>{
          for(var i=0 ; i<this.$store.state.donneeVelib.length; i++){
            if(this.$store.state.donneeVelib[i].stationcode ==stationCode){
              this.$store.state.donneeEnCours.push(this.$store.state.donneeVelib[i])
            }
          }
        });
      }
      else if (this.selectFiltre == 18) {
        this.selectFiltre = Number("18");
        let stationFiltre = currentStationCodes.filter(code => {
          return code &&
            code.length == 5 &&
            code.slice(0, 2) === this.selectFiltre.toString()
        });
       
        stationFiltre.forEach((stationCode) =>{
          for(var i=0 ; i<this.$store.state.donneeVelib.length; i++){
            if(this.$store.state.donneeVelib[i].stationcode ==stationCode){
              this.$store.state.donneeEnCours.push(this.$store.state.donneeVelib[i])
            }
          }
        });
      }
      else if (this.selectFiltre == 19) {
        this.selectFiltre = Number("19");
        let stationFiltre = currentStationCodes.filter(code => {
          return code &&
            code.length == 5 &&
            code.slice(0, 2) === this.selectFiltre.toString()
        });
        
        stationFiltre.forEach((stationCode) =>{
          for(var i=0 ; i<this.$store.state.donneeVelib.length; i++){
            if(this.$store.state.donneeVelib[i].stationcode ==stationCode){
              this.$store.state.donneeEnCours.push(this.$store.state.donneeVelib[i])
            }
          }
        });
      }
      else if (this.selectFiltre == 20) {
        this.selectFiltre = Number("20");
        let stationFiltre = currentStationCodes.filter(code => {
          return code &&
            code.length == 5 &&
            code.slice(0, 2) === this.selectFiltre.toString()
        });
       
        stationFiltre.forEach((stationCode) =>{
          for(var i=0 ; i<this.$store.state.donneeVelib.length; i++){
            if(this.$store.state.donneeVelib[i].stationcode ==stationCode){
              this.$store.state.donneeEnCours.push(this.$store.state.donneeVelib[i])
            }
          }
        });
      }
      else if (this.selectFiltre == 21) {
        this.selectFiltre = Number("21");
        let stationFiltre = currentStationCodes.filter(code => {
          let limit = 30
          return code &&
            code.length == 5 &&
            code.slice(0,2) >= this.selectFiltre.toString() &&
            code.slice(0,2)<= limit.toString();
        });
        
        stationFiltre.forEach((stationCode) =>{
          for(var i=0 ; i<this.$store.state.donneeVelib.length; i++){
            if(this.$store.state.donneeVelib[i].stationcode ==stationCode){
              this.$store.state.donneeEnCours.push(this.$store.state.donneeVelib[i])
            }
          }
        });
    }
    else if (this.selectFiltre == 31) {
        this.selectFiltre = Number("31");
        let stationFiltre = currentStationCodes.filter(code => {
          let limit = 40
          return code &&
            code.length == 5 &&
            code.slice(0,2) >= this.selectFiltre.toString() &&
            code.slice(0,2)<= limit.toString();
        });
        
        stationFiltre.forEach((stationCode) =>{
          for(var i=0 ; i<this.$store.state.donneeVelib.length; i++){
            if(this.$store.state.donneeVelib[i].stationcode ==stationCode){
              this.$store.state.donneeEnCours.push(this.$store.state.donneeVelib[i])
            }
          }
        });
    }

    else if (this.selectFiltre == 41) {
        this.selectFiltre = Number("41");
        let stationFiltre = currentStationCodes.filter(code => {
          let limit = 50
          return code &&
            code.length == 5 &&
            code.slice(0,2) >= this.selectFiltre.toString() &&
            code.slice(0,2)<= limit.toString();
        });
        
        stationFiltre.forEach((stationCode) =>{
          for(var i=0 ; i<this.$store.state.donneeVelib.length; i++){
            if(this.$store.state.donneeVelib[i].stationcode ==stationCode){
              this.$store.state.donneeEnCours.push(this.$store.state.donneeVelib[i])
            }
          }
        });
    }

    else if (this.selectFiltre == 51) {
        this.selectFiltre = Number("51");
        let stationFiltre = currentStationCodes.filter(code => {
          let limit = 60
          return code &&
            code.length == 5 &&
            code.slice(0,2) >= this.selectFiltre.toString() &&
            code.slice(0,2)<= limit.toString();
        });
        
        stationFiltre.forEach((stationCode) =>{
          for(var i=0 ; i<this.$store.state.donneeVelib.length; i++){
            if(this.$store.state.donneeVelib[i].stationcode ==stationCode){
              this.$store.state.donneeEnCours.push(this.$store.state.donneeVelib[i])
            }
          }
        });
    }



      else if (this.selectFiltre == 92) {
        this.selectFiltre = Number("92");
        let stationFiltre = currentStationCodes.filter(code => {
          return code &&
            code.length == 5 &&
            code.slice(0,2) === this.selectFiltre.toString()
        });
        
        stationFiltre.forEach((stationCode) =>{
          for(var i=0 ; i<this.$store.state.donneeVelib.length; i++){
            if(this.$store.state.donneeVelib[i].stationcode ==stationCode){
              this.$store.state.donneeEnCours.push(this.$store.state.donneeVelib[i])
            }
          }
        });
    }
    },

  },


  data() {
    return {
      stationcode: this.$store.state.stationChoisi.stationcode,
      name: this.$store.state.stationChoisi.name,
      coordonnees_geo: this.$store.state.stationChoisi.coordonnees_geo,
      nom_arrondissement_communes: this.$store.state.stationChoisi.nom_arrondissement_communes,
      is_returning: this.$store.state.stationChoisi.is_returning,
      capacity: this.$store.state.stationChoisi.capacity,
      numdocksavailable: this.$store.state.stationChoisi.numdocksavailable,
      numbikesavailable: this.$store.state.stationChoisi.numbikesavailable,
      is_renting: this.$store.state.stationChoisi.is_renting,
      selectFiltre: '',

    }

  }

};
</script>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

th,
td {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

th {
  background-color: #f2f2f2;
}

.container {
  display: flex;
}

.left-column,
.right-column {
  flex: 1;
  padding: 20px;
  /* Ajoutez un padding au besoin */
}

.left-column {
  background-color: #eee;
  /* Couleur de fond de la colonne de gauche */
}

.right-column {
  background-color: #ddd;
  /* Couleur de fond de la colonne de droite */
}
</style>
