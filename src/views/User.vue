<template>
  <main>
    <div class="item secondary">
      <v-data-table :headers="headers" :items="desserts" :search="search">
        <template v-slot:top>
          <v-toolbar flat>
            <v-text-field v-model="search" append-icon="mdi-magnify" label="Search" single-line hide-details />
            <v-spacer />
            <v-btn color="info" dark class="mb-2 mr-2" @click="updateMoney">
              Cập nhật hoa hồng
            </v-btn>
            <v-btn color="orange" dark class="mb-2 mr-2" @click="exportReport">
              Xuất file
            </v-btn>
            <v-dialog v-model="dialog" max-width="500px">
              <template v-slot:activator="{ on, attrs }">
                <v-btn color="primary" dark class="mb-2" v-bind="attrs" v-on="on">
                  Thêm mới
                </v-btn>
              </template>
              <v-card>
                <v-card-title>
                  <span class="headline">{{ formTitle }}</span>
                </v-card-title>

                <v-card-text>
                  <v-container>
                    <v-row>
                      <v-col cols="12">
                        <v-text-field v-model="editedItem.name" label="Họ tên" />
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col cols="12">
                        <v-text-field v-model="editedItem.account" label="Số tài khoản" />
                      </v-col>
                    </v-row>
                    <v-row>
                      <v-col cols="12">
                        <v-text-field v-model="editedItem.refferal" label="Người giới thiệu" />
                      </v-col>
                    </v-row>
                  </v-container>
                </v-card-text>

                <v-card-actions>
                  <v-spacer />
                  <v-btn color="blue darken-1" text @click="close"> Hủy </v-btn>
                  <v-btn color="blue darken-1" text @click="save">
                    Xác nhận
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
            <v-dialog v-model="dialogDelete" max-width="500px">
              <v-card>
                <v-card-title class="headline"> Xác nhận xóa </v-card-title>
                <v-card-actions>
                  <v-spacer />
                  <v-btn color="blue darken-1" text @click="closeDelete">
                    Hủy
                  </v-btn>
                  <v-btn color="blue darken-1" text @click="deleteItemConfirm">
                    Xác nhận
                  </v-btn>
                  <v-spacer />
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-toolbar>
        </template>
        <template v-slot:[`item.actions`]="{ item }">
          <v-btn small class="primary mr-2" @click="$router.push(`/user/${item.account}`)">
            Chi tiết
          </v-btn>
          <v-btn small class="info mr-2" @click="editItem(item)">
            Cập nhật
          </v-btn>
          <v-btn small class="error" @click="deleteItem(item)">Xóa</v-btn>
        </template>
        <!-- <template v-slot:[`item.agency`]="{ item }">
          <v-btn v-if="item.agency" color="primary" outlined small
            >Đại lý</v-btn
          >
          <v-btn v-else color="error" outlined small>Không</v-btn>
        </template> -->
        <template v-slot:[`item.brokerage_money`]="{ item }">
          {{ brokerageMoney(item) }}
        </template>
        <template v-slot:[`item.balance`]="{ item }">
          {{ formatPrice(item.balance) }}
        </template>
        <template v-slot:[`item.profit`]="{ item }">
          {{ formatPrice(item.profit) }}
        </template>
        <template v-slot:[`item.commission`]="{ item }">
          {{ formatPrice(item.commission) }}
        </template>
      </v-data-table>
    </div>
  </main>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data: () => ({
    search: "",
    dialog: false,
    dialogDelete: false,
    desserts: [],
    editedIndex: -1,
    headers: [
      { text: "Họ tên", value: "name" },
      { text: "Số tài khoản", value: "account" },
      { text: "Người giới thiệu", value: "refferal" },
      { text: "Số dư", value: "balance" },
      { text: "Lợi nhuận", value: "profit" },
      { text: "Commission", value: "commission" },
      { text: "Hoa hồng", value: "brokerage_money" },
      { text: "Thao tác", value: "actions", sortable: false },
    ],
    editedItem: {
      name: "",
      account: "",
      refferal: "",
    },
    defaultItem: {
      name: "",
      account: "",
      refferal: "",
    },
    excel_htmls: ""
  }),

  computed: {
    ...mapGetters(["account", "user_page"]),
    formTitle() {
      return this.editedIndex === -1 ? "Thêm mới" : "Cập nhật";
    },
  },

  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    },
  },

  mounted() {
    this.getData();
  },

  methods: {
    brokerageMoney(item) {
      if (!item.brokerage_money) return 0;

      if (item.agency) {
        return this.formatPrice(item.brokerage_money + (item.profit - item.commission) / 10 + item.commission / 4);
      }
      return this.formatPrice(item.brokerage_money);
    },

    updateMoney() {
      this.CallAPI("get", "update-money", {}, (res) => {
        this.getData();
        this.$toast.success("Cập nhật hoa hồng thành công");
      });
    },

    getData() {
      this.CallAPI("get", "customer", {}, (res) => {
        this.desserts = res.data;
        this.excel_htmls = `
            <tr>
              <td colspan="8" style="text-align: center"><b>THỐNG KÊ HOA HỒNG</b></td>
            </tr>
            <tr>
                <th style="width: 60px">STT</th>
                <th style="width: 120px">Họ tên</th>
                <th style="width: 80px">Số tài khoản</th>
                <th style="width: 120px">Người giới thiệu</th>
                <th style="width: 80px">Số dư</th>
                <th style="width: 80px">Lợi nhuận</th>
                <th style="width: 100px">Commission</th>
                <th style="width: 100px">Tiền hoa hồng</th>
            </tr>
        `;

        let total = 0

        for (let [index, item] of res.data.entries()) {
          this.excel_htmls += `
                <tr>
                    <td style="text-align: center">${index + 1}</td>
                    <td style="text-align: center">${item.name}</td>
                    <td style="text-align: center">${item.account}</td>
                    <td style="text-align: center">${item.refferal}</td>
                    <td style="text-align: center">${this.formatPrice(item.balance)}</td>
                    <td style="text-align: center">${this.formatPrice(item.profit)}</td>
                    <td style="text-align: center">${this.formatPrice(item.commission)}</td>
                    <td style="text-align: center">${this.brokerageMoney(item)}</td>
                </tr>
            `;
            total += this.brokerageMoney(item)
        }

        // this.excel_htmls += `
        //   <tr style="color: green">
        //     <td colspan="7" style="text-align: center"><b>Tổng</b></td>
        //     <td style="text-align: center"><b>${total}</b></td>
        //   </tr>
        // `
      });
    },

    searchHandle() {
      this.CallAPI(
        "get",
        "search/customers?query=" + this.search,
        {},
        (res) => {
          this.desserts = res.data;
        }
      );
    },

    editItem(item) {
      this.editedIndex = this.desserts.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      this.editedIndex = this.desserts.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },

    deleteItemConfirm() {
      this.closeDelete();
      this.CallAPI(
        "delete",
        "customer/" + this.desserts[this.editedIndex].account,
        {},
        (response) => {
          this.$toast.success("Xóa thành công");
          this.getData();
        },
        (error) => { }
      );
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    save() {
      if (!this.editedItem.account) {
        this.$toast.error("Nhập đủ thông tin");
        return;
      }
      const data = {
        name: this.editedItem.name,
        account: this.editedItem.account,
        refferal: this.editedItem.refferal,
        agency: this.editedItem.refferal == "IB56389360" ? 1 : 0,
      };

      if (this.editedIndex > -1) {
        this.CallAPI(
          "put",
          "customer/" + this.desserts[this.editedIndex].account,
          data,
          (response) => {
            this.$toast.success("Sửa thành công");
            this.getData();
            this.close();
          },
          (error) => {
            this.$toast.error("Đã xảy ra lỗi");
          }
        );
      } else {
        this.CallAPI(
          "post",
          "customer",
          data,
          (response) => {
            this.$toast.success("Thêm thành công");
            this.getData();
            this.close();
          },
          (error) => {
            this.$toast.error(error.response.data.message[0]);
          }
        );
      }
    },
    formatPrice(value) {
      if (!value) return 0;
      return String(parseFloat(value).toFixed(2))
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        .replace('.00', '')
    },
    exportReport() {
      var uri = "data:application/vnd.ms-excel;base64,";
      var template =
        '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><meta charset="UTF-8"><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--></head><body><table border>{table}</table></body></html>';
      var base64 = function (s) {
        return window.btoa(unescape(encodeURIComponent(s)));
      };

      var format = function (s, c) {
        return s.replace(/{(\w+)}/g, function (m, p) {
          return c[p];
        });
      };

      var ctx = {
        worksheet: "Worksheet",
        table: this.excel_htmls,
      };

      var link = document.createElement("a");
      link.download =
        "Thống kê hoa hồng ngày " +
        new Date().toLocaleDateString("en-GB") +
        ".xls";
      link.href = uri + base64(format(template, ctx));
      link.click();
    },
  },
};
</script>