Vue.component('ContohSlotBiasa', {
    props: ['nama', 'whatsapp'],
    template: `
        <div style="margin-top: 20px;">
            <div class="card">
                <div class="card-body">

                    <p class="card-text">Contoh Slot Biasa</p>
                    
                    <hr/>
                    
                    <h4 class="card-title">{{ nama }}</h4>
                    
                    <p class="card-text">
                        <slot>Deskripsi Default</slot>
                    </p>
                    
                    <hr/>
                    
                    <p class="card-text"><strong>Kontak WA :</strong> {{ whatsapp }}</p>
                    
                </div>
            </div>
        </div>
    `
});

Vue.component('ContohNamedSlots', {
    template: `
        <div style="margin-top: 20px;">
            <div class="card">
                <div class="card-body">
                
                    <p class="card-text">Contoh Named Slots</p>

                    <hr/>

                    <h4 class="card-title">
                        <slot name="nama">Nama Default</slot>
                    </h4>

                    <p class="card-text">
                        <slot>Deskripsi Default</slot>
                    </p>

                    <hr/>

                    <slot name="whatsapp">WA Default</slot>

                </div>
            </div>
        </div>
    `
});

Vue.component('ContohScopedSlots', {
    props: ['nama'],
    template: `
        <div style="margin-top: 20px;">
            <div class="card">
                <div class="card-body">
                
                    <slot 
                        :namaProgrammer=nama 
                        waProgrammer="08-222-666-777-8"
                        :deskripsiProgrammer=deskripsi
                    >Konten Default</slot>

                </div>
            </div>
        </div>
    `,
    data() {
        return {
            deskripsi: "Setengah Juve Setengah Madrid"
        }
    }
});

new Vue({
    el: '#app'
});