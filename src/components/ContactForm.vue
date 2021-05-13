<template>
    <form>
        <div class="row pb-4 pt-3 px-4 rounded" style="background: var(--secondary)">
            <p class="text-start form-text">Your Name</p>
            <div class="col-md-6 col-12">
                <input type="text" class="form-control form-control-lg" aria-label="First name">
            </div>
            <div class="col-md-6 col-12 mt-2">
                <input type="text" class="form-control form-control-lg" aria-label="Last name">
            </div>
        </div>
        <div class="row mt-4">
            <div class="col">
                <div class="col p-3 rounded" style="background: var(--secondary)">
                    <p class="text-end form-text">Your Email</p>
                    <input type="text" class="form-control form-control-lg" aria-label="Last name">
                </div>
                <div class="col mt-3">
                    <button class="btn btn-success w-100 p-3 submit-button">Submit</button>
                </div>
            </div>
            <div class="col">
                <div class="col p-3 rounded h-100" style="background: var(--secondary)">
                    <p class="text-start form-text">Your Message</p>
                    <textarea class="form-control" aria-label="With textarea"></textarea>
                </div>
            </div>
        </div>

    </form>
</template>

<script>
    export default {
        name: "ContactForm"
    }
</script>

<style scoped>
textarea {
    height: calc(100% - 45px);
}
.form-control {
    background: var(--trimary);
    border: none;
    color: var(--text);
    min-height: 3.85rem;
}
.submit-button {
    font-size: 2rem;
    font-family: Roboto,sans-serif;
    font-weight: 900;
    color: var(--text)
}
.form-text {
    font-family: Roboto,sans-serif;
    font-weight: 400;
    font-size: 1rem;
    color: var(--text)
}
</style>