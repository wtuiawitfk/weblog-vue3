<template>
  <div
    class="bg-white h-[64px] flex pr-4 border-b border-slate-200"
    @click="handleMenuWidth"
  >
    <!-- 左边栏收缩、展开 -->
    <el-tooltip
      class="box-item"
      effect="dark"
      content="隐藏菜单"
      placement="bottom"
    >
      <div
        class="w-[42px] h-[64px] cursor-pointer flex items-center justify-center text-gray-700 hover:bg-gray-200"
      >
        <el-icon>
          <Fold />
        </el-icon>
      </div>
    </el-tooltip>

    <div class="ml-auto flex">
      <!-- 点击全屏展示 -->
      <el-tooltip
        class="box-item"
        effect="dark"
        content="全屏"
        placement="bottom"
      >
        <div
          class="w-[42px] h-[64px] cursor-pointer flex items-center justify-center text-gray-700 mr-2 hover:bg-gray-200"
        >
          <el-icon>
            <FullScreen />
          </el-icon>
        </div>
      </el-tooltip>
      <!-- 登录用户头像 -->
      <el-dropdown>
        <span
          class="el-dropdown-link flex items-center justify-center text-gray-700 text-xs"
        >
          <!-- 头像 Avatar -->
          <el-avatar
            class="mr-2"
            :size="25"
            src="https://img.quanxiaoha.com/quanxiaoha/f97361c0429d4bb1bc276ab835843065.jpg"
          />
          Admin
          <el-icon class="el-icon--right">
            <arrow-down />
          </el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>修改密码</el-dropdown-item>
            <el-dropdown-item>退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup>
import { ArrowDown } from "@element-plus/icons-vue";
import { useMenuStore } from "@/stores/menu";

const menuStore = useMenuStore();

const handleMenuWidth = () => {
  menuStore.handleMenuWidth();
};
</script>
<style scoped>
.example-showcase .el-dropdown-link {
  cursor: pointer;
  color: var(--el-color-primary);
  display: flex;
  align-items: center;
}
</style>
