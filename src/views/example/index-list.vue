<template>
  <div class="page-indexlist">
    <div class="page-indexlist-wrapper">
      <mt-index-list>
        <mt-index-section v-for="item in alphabet" :index="item.initial">
          <mt-cell v-for="cell in item.cells" :title="cell"></mt-cell>
        </mt-index-section>
      </mt-index-list>
    </div>
  </div>
</template>

<style>
  .page-indexlist {
    padding-top: 40px;
    padding-bottom: 46px;
  }

  .page-indexlist .page-indexlist-wrapper{
    width: 100%;
    border-top: solid 1px #ddd;
  }
</style>

<script type="text/babel">
  const NAMES = ['Aaron', 'Alden', 'Austin', 'Baldwin', 'Braden', 'Carl', 'Chandler', 'Clyde', 'David', 'Edgar', 'Elton', 'Floyd', 'Freeman', 'Gavin', 'Hector', 'Henry', 'Ian', 'Jason', 'Joshua', 'Kane', 'Lambert', 'Matthew', 'Morgan', 'Neville', 'Oliver', 'Oscar', 'Perry', 'Quinn', 'Ramsey', 'Scott', 'Seth', 'Spencer', 'Timothy', 'Todd', 'Trevor', 'Udolf', 'Victor', 'Vincent', 'Walton', 'Willis', 'Xavier', 'Yvonne', 'Zack', 'Zane'];

  export default {
    data() {
      return {
        alphabet: []
      };
    },

    created() {
      'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').forEach(initial => {
        let cells = NAMES.filter(name => name[0] === initial);
        this.alphabet.push({
          initial,
          cells
        });
      });
    }
  };
</script>
