<template>
  <div class="container">
    <form class="signin" novalidate @submit="onSubmit">
      <div class="outline">
        <h1>SIGN UP</h1>
        <div class="form-area">
          <div v-for="(field, i) in fields" :key="i" class="input">
            <input
              :ref="field.ref"
              v-model="field.value.value"
              :type="field.type"
              :name="field.name"
              :placeholder="field.label"
            />
            <error-message v-if="field.errors?.value" class="err">
              {{ field.errors?.value }}
            </error-message>
          </div>

          <div class="input buttons">
            <button type="submit">가입하기</button>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { pick } from 'lodash'
import { useForm, useField } from 'vee-validate'
import { useStore } from '@/store'
import { Field } from '@/middlewares/validator/form'
import yup, { userRules } from '@/middlewares/validator/yup'
import { setTitle } from '@/common/helper'
import ErrorMessage from '@/components/Message/ErrorMessage.vue'

export default defineComponent({
  name: 'Signup',
  components: {
    ErrorMessage,
  },

  setup() {
    const store = useStore()

    setTitle('가입하기')

    const { handleSubmit } = useForm({
      validationSchema: yup.object(pick(userRules, 'email', 'pw', 'name', 'tel')),

      initialValues: {
        email: 'test@test.com',
        pw: '1234',
        name: '홍길동',
        tel: '010-1234-4321',
      },
    })

    const fields: Field[] = [
      {
        name: 'email',
        label: '이메일',
        type: 'email',
      },
      {
        name: 'pw',
        label: '비밀번호',
        type: 'password',
      },
      {
        name: 'name',
        label: '이름',
      },
      {
        name: 'tel',
        label: '전화번호',
      },
    ]
    fields.forEach((field) => {
      if (!field.type) field.type = 'text'

      const { value, errorMessage } = useField(field.name)
      field.value = value
      field.errors = errorMessage
      field.ref = ref(null)
    })

    const onSubmit = handleSubmit(async (value, { setFieldError, resetForm }) => {
      try {
        // 이메일 중복이거나 오류 발생이거나
        if ((await store.dispatch('auth/checkEmail', value.email)) !== false) {
          setFieldError('email', '이메일이 이미 존재합니다')
          return
        }

        await store.dispatch('auth/signUp', value)

        resetForm()
        fields[0].ref?.value.focus()
      } catch (err) {
        console.log(err)
      }
    })

    return {
      fields: fields as Required<Field>[],
      onSubmit,
    }
  },
})
</script>

<style lang="scss" scoped>
form.signin {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  max-width: 500px;
  padding: 15px;

  .outline {
    padding: 30px;
    border-radius: 10px;
    background: white;
    box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.1);
  }

  h1 {
    margin-bottom: 50px;
    font-size: 20px;
    font-weight: normal;
    letter-spacing: 5px;
    text-align: center;
  }
}

.form-area {
  .input {
    margin-bottom: 10px;
  }

  input {
    width: 100%;
    height: 45px;
    padding: 0 20px;
    border: 1px solid #ccc;
    border-radius: 4px;
    color: #333;
    font-size: 18px;
    line-height: 45px;

    &:focus {
      outline: none;
    }
    &::placeholder {
      color: #b7b7b7;
    }
  }

  .buttons {
    margin-top: 25px;
  }

  button {
    display: block;
    width: 100%;
    height: 45px;
    margin-top: 12px;
    appearance: none;
    background: #818a91;
    border: 0;
    border-radius: 4px;
    color: white;
    font-size: 18px;
    line-height: 45px;
    text-align: center;

    &:hover {
      background: #0d7fdc;
    }
  }

  .err {
    border: 1px solid #dc0d15;
    text-align: left;
  }

  @include media-big {
    max-width: 650px;

    input,
    button {
      height: 60px;
      line-height: 60px;
    }
  }
}
</style>
