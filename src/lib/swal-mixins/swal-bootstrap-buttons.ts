import Swal from "sweetalert2";

const swalBootstrapButtons = Swal.mixin({
    customClass: {
        confirmButton: "btn btn-primary",
        cancelButton: "btn btn-danger",
    },
    buttonsStyling: false,
});

export default swalBootstrapButtons;
