<template>
    <div class="sertification-section">
        <div class="sertification-content">
            <h3>Сертификация</h3>
            <p>
                Вся продукция торговой марки VALFEX сертифицирована и имеет все необходимые разрешительные
                документы.<br><br>
                Подтверждая качество и надежность своих изделий ТМ VALFEX застраховала весь ассортимент своей
                продукции
                в Страховой компании «Росгосстрах».<br><br>
                Каждый потребитель, у которого установлена продукция ТМ VALFEX, может быть уверен, что его имущество
                «под
                крылом» надежных компаний!
            </p>

        </div>
        <div class="sertification-right">
            <div class="sertification-images">
                <img src="@/assets/images/sertification.png" alt="Каталог 1"
                    class="sertification-image sertification-image-1" />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SertificationSection'
};
</script>

<style scoped>
.sertification-section {
    padding-top: 2%;
    display: flex;
    background-color: #F7F7F7;
    width: 100%;
    margin: 0;
    text-align: left;
}

.sertification-content {
    margin-left: 6%;
    max-width: 60%;
    padding-right: 10px;
}

.sertification-content h3 {
    font-weight: bold;
    font-size: 18px;
    color: #333;
    margin-bottom: 10px;
    max-width: 50%;
}

.sertification-content p {
    max-width: 77%;
    color: #666;
    font-size: 16px;
    line-height: 1.6;
}

.sertification-right {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    padding-right: 200px; /* Adds padding inside the container */
}



.sertification-images {
    display: flex;
    position: relative;
}

.sertification-image {
    height: 380px;
    width: auto;
    margin-right: 20px; /* Add right margin for spacing */
    margin-bottom: 20px;
}



.sertification-image-1 {
    position: relative;

    z-index: 1;
}


.sertification-buttons {
    margin-left: 30%;
    display: flex;
    flex-direction: column;
    gap: 5px;
    align-items: center;
}

.pdf-button {
    background: none;
    border: 1px solid #E4530F;
    color: #E4530F;
    padding: 5px 15px;
    font-size: 14px;
    border-radius: 20px;
    cursor: pointer;
    text-align: center;
    transition: background-color 0.3s, color 0.3s;
}

.online-button {
    margin-top: 50px;
    background: none;
    border: none;
    color: #E4530F;
    font-weight: normal;
    padding: 5px 10px;
}

.pdf-button {
    display: flex;
    align-items: center;
    justify-content: center;
}


.pdf-button:hover {
    background-color: #E4530F;
    color: white;
}

.online-button:hover {
    text-decoration: underline;
    cursor: pointer;
}
</style>