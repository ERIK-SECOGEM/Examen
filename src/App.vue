<template>
  <div id="app">
    <h1 class="title">Examen</h1>
    <div class="row container">
      <form @submit.prevent="validateForm">
        <div class="field">
          <div class="field-body">
            <div class="field">
              <label class="label">Nombre*</label>
              <div class="control">
                <input class="input" type="text" v-model="form.infoUsuario.nombre" v-validate="'required|alpha_spaces'" id="nombre" name="nombre" :class="{'is-danger': submitted && errors.has('nombre')}" ref="nombre">
              </div>
              <div v-if="submitted && errors.has('nombre')" class="help is-danger">
                {{ errors.first("nombre") }}
              </div>
            </div>
            <div class="field">
              <label class="label">Primer apellido*</label>
              <div class="control">
                <input class="input" type="text" v-model="form.infoUsuario.primer_apellido" v-validate="'required|alpha_spaces'" id="primer apellido" name="primer apellido" :class="{'is-danger': submitted && errors.has('primer apellido')}" ref="primer_apellido">
              </div>
              <div v-if="submitted && errors.has('primer apellido')" class="help is-danger">
                {{ errors.first("primer apellido") }}
              </div>
            </div>
            <div class="field">
              <label class="label">Segundo apellido</label>
              <div class="control">
                <input class="input" type="text" v-model="form.infoUsuario.segundo_apellido" v-validate="'alpha_spaces'" id="segundo apellido" name="segundo apellido" :class="{'is-danger': submitted && errors.has('segundo apellido')}" ref="segundo_apellido">
              </div>
              <div v-if="submitted && errors.has('segundo apellido')" class="help is-danger">
                {{ errors.first("segundo apellido") }}
              </div>
            </div>
          </div>
          <div class="field-body">
            <div class="field">
              <label class="label">CURP*</label>
              <div class="control">
                <input class="input" type="text" v-model="form.infoUsuario.curp" v-validate="{required: true, regex:/^([A-Z][AEIOUX][A-Z]{2}\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])[HM](?:AS|B[CS]|C[CLMSH]|D[FG]|G[TR]|HG|JC|M[CNS]|N[ETL]|OC|PL|Q[TR]|S[PLR]|T[CSL]|VZ|YN|ZS)[B-DF-HJ-NP-TV-Z]{3}[A-Z\d])(\d)$/}" id="CURP" name="CURP" :class="{'is-danger': submitted && errors.has('CURP')}" ref="curp">
              </div>
              <div v-if="submitted && errors.has('CURP')" class="help is-danger">
                {{ errors.first("CURP") }}
              </div>
            </div>
            <div class="field">
              <label class="label">RFC (con homoclave)*</label>
              <div class="control">
                <input class="input" type="text" v-model="form.infoUsuario.rfc" v-validate="{required: true, regex:/^([A-ZÑ&]{3,4}) ?(?:- ?)?(\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])) ?(?:- ?)?([A-Z\d]{2})([A\d])$/}" id="RFC" name="RFC" :class="{'is-danger': submitted && errors.has('RFC')}" ref="rfc">
              </div>
              <div v-if="submitted && errors.has('RFC')" class="help is-danger">
                {{ errors.first("RFC") }}
              </div>
            </div>
          </div>
          <div class="field-body">
            <div class="field">
              <label class="label">Código postal*</label>
              <div class="control">
                <input class="input" type="text" v-model="form.Domicilio.codigo_postal" v-validate="'required|numeric|max:5'" id="código postal" name="código postal" :class="{'is-danger': submitted && errors.has('código postal')}" ref="codigo_postal">
              </div>
              <div v-if="submitted && errors.has('código postal')" class="help is-danger">
                {{ errors.first("código postal") }}
              </div>
            </div>
            <div class="field">
              <label class="label">Calle*</label>
              <div class="control">
                <input class="input" type="text" v-model="form.Domicilio.calle" v-validate="'required'" id="calle" name="calle" :class="{'is-danger': submitted && errors.has('calle')}" ref="calle">
              </div>
              <div v-if="submitted && errors.has('calle')" class="help is-danger">
                {{ errors.first("calle") }}
              </div>
            </div>
          </div>
          <div class="field-body">
            <div class="field">
              <label class="label">Número exterior*</label>
              <div class="control">
                <input class="input" type="text" v-model="form.Domicilio.numero_exterior" v-validate="'required|numeric|max:5'" id="número exterior" name="número exterior" :class="{'is-danger': submitted && errors.has('número exterior')}" ref="numero_exterior">
              </div>
              <div v-if="submitted && errors.has('número exterior')" class="help is-danger">
                {{ errors.first("número exterior") }}
              </div>
            </div>
            <div class="field">
              <label class="label">Número interior</label>
              <div class="control">
                <input class="input" type="text" v-model="form.Domicilio.numero_interior" v-validate="'alpha_num|max:10'" id="número interior" name="número interior" :class="{'is-danger': submitted && errors.has('número interior')}" ref="numero_interior">
              </div>
              <div v-if="submitted && errors.has('número interior')" class="help is-danger">
                {{ errors.first("número interior") }}
              </div>
            </div>
            <div class="field">
              <label class="label">Estado</label>
              <div class="control">
                <input class="input" type="text" v-model="form.Domicilio.estado" v-validate="'alpha_spaces'" id="estado" name="estado" :class="{'is-danger': submitted && errors.has('estado')}" ref="estado">
              </div>
              <div v-if="submitted && errors.has('estado')" class="help is-danger">
                {{ errors.first("estado") }}
              </div>
            </div>
          </div>
          <div class="field-body">
            <div class="field">
              <label class="label">Delegación / Municipio*</label>
              <div class="control">
                <input class="input" type="text" v-model="form.Domicilio.municipio" v-validate="'required|alpha_spaces'" id="municipio" name="municipio" :class="{'is-danger': submitted && errors.has('municipio')}" ref="municipio">
              </div>
              <div v-if="submitted && errors.has('municipio')" class="help is-danger">
                {{ errors.first("municipio") }}
              </div>
            </div>
            <div class="field">
              <label class="label">Colonia*</label>
              <div class="control">
                <input class="input" type="text" v-model="form.Domicilio.colonia" v-validate="'required|alpha_spaces'" id="colonia" name="colonia" :class="{'is-danger': submitted && errors.has('colonia')}" ref="colonia">
              </div>
              <div v-if="submitted && errors.has('colonia')" class="help is-danger">
                {{ errors.first("colonia") }}
              </div>
            </div>
          </div>
        </div>
        <button class="button is-link">Guardar</button>
      </form>
    </div>
    <br>
    <div class="row container">
      <table class="table is-striped is-fullwidth">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Email</th>
            <th>Website</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" v-bind:key="user.id">
            <td>{{ user.id }}</td>
            <td>{{ user.name }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.website }}</td>
            <td>
              <span class="icon-text has-text-primary">
                <span class="icon">
                  <font-awesome-icon icon="pen"/>
                </span>
              </span>
              <span class="icon-text has-text-danger">
                <span class="icon">
                  <font-awesome-icon icon="trash"/>
                </span>
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <br>
    <div class="container">
      <l-map style="height: 500px; width: 100%" :zoom="zoom" :center="center">
        <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
        <l-layer-group v-for="position in positions" :key="position.id" :visible="true">
          <l-layer-group :visible="true">
          <l-marker v-for="position in positions" :key="position.id" :visible="true"  :lat-lng="position.geo" @click="alert(position.geo)"/>
        </l-layer-group>
        </l-layer-group>
      </l-map>
    </div>
    <br>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'App',
  mounted(){
     // invocar los métodos
    this.getUsers();
  },
  data: function () {
    return {
      users: [],
      form: {
        infoUsuario: {
          nombre: '',
          primer_apellido: '',
          segundo_apellido: '',
          curp: '',
          rfc: '',
        },
        Domicilio: {
          codigo_postal: '',
          calle: '',
          numero_interior: '',
          numero_exterior: '',
          estado: '',
          municipio: '',
          colonia: ''
        }
      },
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution:
        '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
        zoom: 1,
      center: [5.0000, -10.4618],
      positions: [],
      submitted: false
    }
  },
  methods: {
    getUsers() {
      axios.get("https://jsonplaceholder.typicode.com/users")
        .then(res => {
          this.users = res.data;
          this.geo(res);
        })
        .catch(error => {
          console.log(error);
        });
    },
    validateForm() {
      this.submitted = true;
      this.$validator.validate().then(valid => {
        if (valid) {
          alert("Campos validados correctamente.");
          this.storeUser();
        } else {
          alert("Existen campos por validar.");
        }
      });
    },
    storeUser()
    {
      axios.post("http://httpbin.org/post", this.form)
      .then(res => {
        //console.log(res);
        if (res.statusText == 'OK')
        {
          this.clearFields();
          alert("Usuario guardado exitosamente.");
        }
      })
      .catch(error => {
        alert(error);
      });
    },
    clearFields()
    {
      this.$refs["nombre"].value = "";
      this.$refs["primer_apellido"].value = "";
      this.$refs["segundo_apellido"].value = "";
      this.$refs["curp"].value = "";
      this.$refs["rfc"].value = "";
      this.$refs["codigo_postal"].value = "";
      this.$refs["calle"].value = "";
      this.$refs["numero_interior"].value = "";
      this.$refs["numero_exterior"].value = "";
      this.$refs["estado"].value = "";
      this.$refs["municipio"].value = "";
      this.$refs["colonia"].value = "";
    },
    geo(res)
    {
      this.positions.push(res.data[0].address)
      this.positions.push(res.data[1].address)
      this.positions.push(res.data[2].address)
      this.positions.push(res.data[3].address)
      this.positions.push(res.data[4].address)
      this.positions.push(res.data[5].address)
      this.positions.push(res.data[6].address)
      this.positions.push(res.data[7].address)
      this.positions.push(res.data[8].address)
      this.positions.push(res.data[9].address)
    },
    alert(item) {
      alert("posición:" + JSON.stringify(item));
    }
  }
}
</script>
