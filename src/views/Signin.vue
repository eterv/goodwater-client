<template>
  <div class="container">
    <form class="signin" novalidate @submit="onSubmit">
      <div class="outline">
        <h1>LOGIN</h1>
        <div class="form-area">
          <div v-for="(field, i) in fields" :key="i" class="input">
            <input
              :ref="field.ref"
              v-model="field.value.value"
              :type="field.type"
              :name="field.name"
              :placeholder="field.label"
            />
          </div>

          <div class="input buttons">
            <error-message v-if="Object.keys(errors).length" class="err">
              <div v-for="(error, i) in errors" :key="i">- {{ error }}</div>
            </error-message>

            <button type="submit" class="signin">로그인</button>
            <button type="button" class="signup" @click="signUp">회원 가입</button>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { computed, ComputedRef, defineComponent, ref, Ref } from 'vue'
import { useRouter } from 'vue-router'
import { useForm, useField } from 'vee-validate'
import { useStore } from '@/store'
import yup, { userRules } from '@/middlewares/validator/yup'
import { setTitle } from '@/common/helper'
import ErrorMessage from '@/components/Message/ErrorMessage.vue'
import { pick } from 'lodash'

interface Field<TValue = unknown> {
  name: string
  label: string
  type?: string
  value?: Ref<TValue>
  errors?: ComputedRef<string | undefined>
  ref?: Ref<any>
}

const schema = yup.object(pick(userRules, 'email', 'pw'))

export default defineComponent({
  name: 'Signin',
  components: {
    ErrorMessage,
  },

  setup() {
    const store = useStore()
    const router = useRouter()

    setTitle('로그인')

    // URI 주소에 redirect 쿼리 문자열이 존재하면, 로그인이 성공한 후에
    // 해당 주소로 자동 이동 된다
    const redirect = computed(() =>
      store.state.global.routeInfo.query.redirect
        ? store.state.global.routeInfo.query.redirect
        : '/'
    )

    const { errors, handleSubmit } = useForm({
      validationSchema: schema,

      initialValues: {
        //email: 'test@test.com',
        //pw: '1234',
        email: 'admin@admin.com',
        pw: 'admin',
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
    ]
    fields.forEach((field) => {
      if (!field.type) field.type = 'text'

      const { value, errorMessage } = useField(field.name)
      field.value = value
      field.errors = errorMessage
      field.ref = ref(null)
    })

    const onSubmit = handleSubmit(async (value, { setFieldError }) => {
      try {
        const resData = await store.dispatch('auth/signIn', value)

        if (resData.error) {
          setFieldError('email', resData.error)
          return
        }

        // 이동
        await router.push({ path: redirect.value as string, replace: true })
      } catch (err) {
        console.log(err)
      }
    })

    const signUp = () => {
      router.push({ path: 'signup' })
    }

    return {
      errors,

      fields,
      onSubmit,
      signUp,
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

    &.signin {
      background: #292d30;
    }

    &:hover {
      background: #0d7fdc;
    }
  }

  .err {
    margin-bottom: 24px;
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
