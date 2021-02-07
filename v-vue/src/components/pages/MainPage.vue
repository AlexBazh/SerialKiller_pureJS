<template>
    <div>
        <Header/>
        <Heading1
             title="Find TV Shows"
        />
        <SearchBar
            placeholder = "Find any TV shows or series"
        />
        <Banner/>
    </div>
</template>

<script>
import Heading1 from '../ui/Heading1';
import SearchBar from '../ui/SearchBar';
import Header from '../ui/Header/Header';
import Banner from '../ui/Banner'

export default {
    name: 'MainPage',
    components: {
        Heading1,
        SearchBar,
        Header,
        Banner
    }
}
</script>

<style>

</style>