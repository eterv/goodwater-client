<template>
  <div class="container">
    <div class="contact-us">
      <H1>Contact us</H1>
      <Content class="contacts">
        <div v-for="(item, i) in contactList" :key="i" class="item">
          <div class="name">{{ item.name }}</div>
          <div class="desc">
            {{ item.role }}
            <br />
            {{ item.email }}
            <br />
            {{ item.contact }}
          </div>
        </div>
      </Content>
    </div>

    <form class="newsletter" @submit="onSubmit">
      <H1>Newsletter</H1>
      <div class="desc">
        Do you wish to receive newsletters from us?
        <br />
        Fill in your contact information under.
      </div>

      <div class="form-area">
        <div v-for="(field, i) in fields" :key="i" class="input">
          <input
            :ref="field.ref"
            v-model="field.value.value"
            :type="field.type"
            :name="field.name"
            :placeholder="field.label"
          />
          <error-message v-if="field.errors.value" class="err">
            {{ field.errors.value }}
          </error-message>
        </div>

        <div class="input buttons">
          <button type="submit">보내기</button>

          <button v-if="user && user.isAdmin" type="button" class="list" @click="viewList">
            목록
          </button>
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
import yup from '@/middlewares/validator/yup'
import { setTitle } from '@/common/helper'
import Content from '@/components/blocks/Content.vue'
import ErrorMessage from '@/components/Message/ErrorMessage.vue'
import H1 from '@/components/blocks/H1.vue'
import { createContact } from '@/modules/contact/service'

interface Field<TValue = unknown> {
  name: string
  label: string
  type?: string
  value?: Ref<TValue>
  errors?: ComputedRef<string | undefined>
  ref?: Ref<any>
}

const contactList = [
  {
    name: 'Ivar S. Williksen',
    role: 'CEO Lofoten Arctic Water',
    email: 'Ivar@lofoten-water.com',
    contact: '+47 913 54 799',
  },
  {
    name: 'Nats Nevelius',
    role: 'Senior VP Sales and marketing',
    email: 'mats@lofoten-water.com',
    contact: '+47 909 19 965',
  },
  {
    name: 'Cecilie Q. Williksen',
    role: 'Sales and marketing coordinator',
    email: 'cecilie@lofoten-water.com',
    contact: '+47 934 60 277',
  },
  {
    name: 'Kjell-Hugo Pedersen',
    role: 'Production Manager',
    email: 'kjell-hugo@lofoten-water.com',
    contact: '+47 907 14 569',
  },
]

const schema = yup.object({
  name: yup
    .string()
    .label('이름')
    .required()
    .min(2)
    .max(50),
  email: yup
    .string()
    .label('이메일')
    .required()
    .email(),
  tel: yup
    .string()
    .label('전화번호')
    .required()
    .matches(
      /^(01[016789]{1}|02|0[3-9]{1}[0-9]{1})-?[0-9]{3,4}-?[0-9]{4}$/,
      '전화번호를 올바로 입력해주세요'
    ),
})

export default defineComponent({
  name: 'Contact',
  components: {
    Content,
    ErrorMessage,
    H1,
  },

  setup() {
    const store = useStore()
    const user = computed(() => store.state.auth.user)

    const router = useRouter()

    setTitle('Contact')

    const { handleSubmit, values } = useForm({
      validationSchema: schema,
      initialValues: {
        name: '테스터',
        email: 'tester1@test.com',
        tel: '010-2222-3333',
      },
    })

    const fields: Field[] = [
      {
        name: 'name',
        label: '이름',
      },
      {
        name: 'email',
        label: '이메일',
        type: 'email',
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

    const onSubmit = handleSubmit(async (value, { resetForm }) => {
      try {
        const resData = await createContact(value)
        if (!resData || !resData.result) {
          throw new Error(resData?.error ?? '알 수 없는 오류가 발생했습니다')
        }

        alert(
          `${resData?.contact?.name}님의 문의가 접수되었습니다. 빠른 시일안에 답변 드리겠습니다.`
        )
        resetForm()
        fields[0].ref?.value.focus()
      } catch (err) {
        console.log(err)
      }
    })

    const viewList = () => router.push('/contact/list')

    return {
      contactList,
      fields,
      onSubmit,
      user,
      viewList,
    }
  },
})
</script>

<style lang="scss" scoped>
.contact-us {
  padding: 50px 0;

  .contacts {
    display: flex;
    flex-wrap: wrap;
    margin-top: 40px;
    color: #707070;
    line-height: 30px;
    text-align: center;

    .item {
      width: 100%;
      margin-bottom: 35px;
    }

    .name {
      font-size: 24px;
    }
    .desc {
      margin-top: 15px;
      font-size: 18px;
      font-weight: 200;
    }
  }

  @include media-big {
    .contacts .item {
      width: 25%;
    }
  }
}

form.newsletter {
  padding: 30px 30px 50px;
  background: #252c46;
  text-align: center;

  h1 {
    color: white;
  }
  .desc {
    margin: 30px 0 45px;
    color: white;
    font-size: 20px;
    font-weight: 200;
    line-height: 34px;
  }

  @include media-big {
    padding: 80px 15px 60px;
  }
}

.form-area {
  width: 100%;
  max-width: 650px;
  margin: 0 auto;

  .input {
    margin-bottom: 10px;
  }
  .buttons {
    display: flex;

    button:not(:first-child) {
      margin-left: 10px;
    }
  }

  input {
    width: 100%;
    height: 45px;
    padding: 0 20px;
    border: 0;
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

  button {
    display: block;
    width: 100%;
    height: 45px;
    appearance: none;
    background: #818a91;
    border: 0;
    border-radius: 4px;
    color: white;
    font-size: 18px;
    line-height: 45px;
    text-align: center;

    &:hover {
      background: #dc0d15;
    }
  }

  .err {
    border: 1px solid #dc0d15;
    color: white;
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
