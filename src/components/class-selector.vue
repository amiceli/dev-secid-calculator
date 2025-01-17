<template>
  <div class="secid-class-selector">
    <select v-model="model">
      <option value="-1" disabled>Class</option>

      <optgroup
        v-for="group in groups"
        :key="group.label"
        :label="group.label"
      >
        <option
          v-for="option in group.options"
          :key="group.label + option.label"
          :value="option.value"
          :disabled="option.disabled ?? false"
        >
          {{ option.label }}
        </option>
      </optgroup>
    </select>
  </div>
</template>

<script setup lang="ts">
const groups = [
    {
        label: 'Frontend dev',
        options: [
            {
                label: 'Vue',
                value: 0,
            },
            {
                label: 'Angular',
                value: 1,
            },
            {
                label: 'Astro',
                value: 2,
            },
            {
                label: 'Svelte',
                value: 9,
            },
            {
                label: 'React',
                value: 12,
                disabled: true,
            },
        ],
    },
    {
        label: 'Backend dev',
        options: [
            {
                label: 'Express',
                value: 3,
            },
            {
                label: 'Nest',
                value: 11,
            },
            {
                label: 'Adonis',
                value: 4,
            },
            {
                label: 'Meteor',
                value: 5,
            },
        ],
    },
    {
        label: 'Fullstack dev',
        options: [
            {
                label: 'Next',
                value: 10,
            },
            {
                label: 'Nuxt',
                value: 6,
            },
            {
                label: 'Sails',
                value: 7,
            },
            {
                label: 'Remix',
                value: 8,
            },
        ],
    },
]

const model = defineModel()
</script>

<style lang="scss" scoped>
.secid-class-selector {
  position: relative;

  &::after {
    display: block;
    position: absolute;
    top: calc(50% - 2px);
    right: 2px;
    width: 4px;
    height: 4px;
    border: 1px solid currentColor;
    border-top: none;
    border-left: none;
    transform: translateY(-50%) rotate(45deg);
    content: '';
  }

  select {
    position: relative;
    appearance: none;
    padding-left: 8px;
    border: none;
    font-size: 16px;
    color: inherit;
    line-height: 2;
    background-color: transparent;
    z-index: 1;

    &:focus-visible {
      outline: none;
    }
  }
}
</style>
