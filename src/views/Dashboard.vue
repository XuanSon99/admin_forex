<template>
  <main class="dashboard">
    <v-row>
      <v-col cols="12" md="4">
        <v-card class="user">
          <h4 class="text-center py-3">Số người đăng ký hôm nay</h4>
          <v-divider></v-divider>
          <div class="py-5 px-5">
            <h1 class="text-center">{{ data.new_user }}</h1>
            <div class="space mt-3">
              <span>Tổng số người dùng đã đăng ký</span>
              <p>{{ data.total_user }}</p>
            </div>
          </div>
        </v-card>
      </v-col>
      <v-col cols="12" md="4">
        <v-card class="contract">
          <h4 class="text-center py-3">Số lượng đơn mua hôm nay</h4>
          <v-divider></v-divider>
          <div class="py-5 px-5">
            <h1 class="text-center">{{ data.new_buy_order }}</h1>
            <div class="space mt-3">
              <span>Tổng số lượng đơn mua</span>
              <p>{{ data.total_buy_order }}</p>
            </div>
          </div>
        </v-card>
      </v-col>
      <v-col cols="12" md="4">
        <v-card class="amount">
          <h4 class="text-center py-3">Số lượng đơn bán hôm nay</h4>
          <v-divider></v-divider>
          <div class="py-5 px-5">
            <h1 class="text-center">{{ data.new_sell_order }}</h1>
            <div class="space mt-3">
              <span>Tổng số lượng đơn bán</span>
              <p>{{ data.total_sell_order }}</p>
            </div>
          </div>
        </v-card>
      </v-col>
    </v-row>
    <v-dialog v-model="dialog" max-width="500px">
      <v-card>
        <v-card-title>
          <span>
            Thông Tin Đơn
            {{ type == 'buy' ? 'Nhập' : 'Xả' }}
          </span>
          <v-spacer></v-spacer>
          <v-btn icon @click="dialog = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>
        <v-divider></v-divider>
        <div class="mx-6 mt-6">
          <v-select v-model="token" outlined label="Loại token" :items="tokens"></v-select>
          <v-text-field v-model="amount" outlined type="number" label="Số lượng"></v-text-field>
          <v-text-field v-model="rate" outlined type="number" label="Tỷ giá"></v-text-field>
          <v-text-field :value="money" outlined type="number" label="Thành tiền" readonly></v-text-field>
          <v-text-field v-model="fee" outlined type="number" label="Tiền phí/ Phí blockchain (USDT)"></v-text-field>
        </div>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn class="default" @click="dialog = false"> Hủy </v-btn>
          <v-btn color="primary" @click="confirm"> Xác nhận </v-btn>
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </main>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      dialog: "",
      data: "",
      type: "",
      tokens: ['usdt', 'btc', 'eth', 'bnb', 'busd'],
      token: 'usdt',
      amount: '',
      rate: '',
      fee: 0
    };
  },
  computed: {
    ...mapGetters(["account"]),
    money(){
      return this.amount*this.rate
    }
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      this.CallAPI("get", "overview", {}, (res) => {
        this.data = res.data;
      });
    },
  },
};
</script>