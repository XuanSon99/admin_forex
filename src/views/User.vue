<template>
  <main>
    <div class="item secondary">
      <v-data-table :headers="headers" :items="desserts" :items-per-page="10" :page.sync="page"
        :server-items-length="totalItems" :footer-props="{ 'items-per-page-options': [10, 10] }">
        <template v-slot:top>
          <v-toolbar flat>
            <v-text-field v-model="search" append-icon="mdi-magnify" label="Search" @keydown.enter="searchHandle"
              single-line hide-details />
            <v-spacer />
            <v-btn color="info" dark class="mb-2 mr-2" @click="updateMoney">
              Cập nhật hoa hồng
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
                    <v-row>
                      <v-col cols="12">
                        <v-checkbox v-model="editedItem.agency" label="Đại lý"></v-checkbox>
                      </v-col>
                    </v-row>
                  </v-container>
                </v-card-text>

                <v-card-actions>
                  <v-spacer />
                  <v-btn color="blue darken-1" text @click="close">
                    Hủy
                  </v-btn>
                  <v-btn color="blue darken-1" text @click="save">
                    Xác nhận
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
            <v-dialog v-model="dialogDelete" max-width="500px">
              <v-card>
                <v-card-title class="headline">
                  Xác nhận xóa
                </v-card-title>
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
        <template v-slot:[`item.agency`]="{ item }">
          <v-btn v-if="item.agency" color="primary" outlined small>Đại lý</v-btn>
          <v-btn v-else color="error" outlined small>Không</v-btn>
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
      { text: "ID", value: "id" },
      { text: "Số tài khoản", value: "account" },
      { text: "Họ tên", value: "name" },
      { text: "Người giới thiệu", value: "refferal" },
      { text: "Đại lý", value: "agency" },
      { text: "Thao tác", value: "actions", sortable: false },
    ],
    editedItem: {
      name: "",
      account: "",
      refferal: "",
      agency: 0,
    },
    defaultItem: {
      name: "",
      account: "",
      refferal: "",
      agency: 0,
    },
    page: 0,
    totalItems: 0,
  }),

  computed: {
    ...mapGetters(["account", "user_page"]),
    formTitle() {
      return this.editedIndex === -1 ? 'Thêm mới' : 'Cập nhật';
    },
  },

  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    },
    page() {
      this.getData();
      this.$store.dispatch("setUserPage", this.page);
    },
    search() {
      if (!this.search) {
        this.getData()
      }
    }
  },

  mounted() {
    this.page = this.user_page;
  },

  methods: {
    updateMoney() {
      this.CallAPI("get", "update-money", {}, (res) => {
        this.$toast.success("Cập nhật hoa hồng thành công");
      });
    },
    getData() {
      this.CallAPI("get", "customer?page=" + this.page, {}, (res) => {
        this.desserts = res.data.data;
        this.totalItems = res.data.total;
      });
    },
    searchHandle() {
      this.CallAPI("get", "search/customers?query=" + this.search, {}, (res) => {
        this.desserts = res.data;
      });
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
      if (
        !this.editedItem.account
      ) {
        this.$toast.error("Nhập đủ thông tin");
        return;
      }
      const data = {
        name: this.editedItem.name,
        account: this.editedItem.account,
        refferal: this.editedItem.refferal,
        agency: this.editedItem.agency
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
  },
};
</script>