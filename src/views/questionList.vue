<template>
  Der Moderator ist {{ $store.state.moderator }}
  <div class="header">
    <h1>Questions</h1>
    <button class="add">Add</button>
  </div>
  <div class="main">
    <form class="question-list">
      <div>
        <input type="text" placeholder=" Platzhalter" />
        <button>löschen</button>
      </div>
      <div>
        <input type="text" placeholder=" Platzhalter" />
        <button>löschen</button>
      </div>
      <div>
        <input type="text" placeholder=" Platzhalter" />
        <button>löschen</button>
      </div>
      <div>
        <input type="text" placeholder=" Platzhalter" />
        <button>löschen</button>
      </div>
    </form>
  </div>
  <button class="submit">Submit</button>
  <button class="back">Back</button>
</template>

<script></script>

<style scoped></style>
