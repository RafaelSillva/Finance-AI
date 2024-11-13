import { auth, clerkClient } from "@clerk/nextjs/server";
import { getCurrentMonthTransactions } from "../get-current-month-transactions";

export const canUserAddTransaction = async () => {
  try {
    // Verifica o userId com a função auth
    const { userId } = await auth();
    if (!userId) {
      throw new Error("Unauthorized");
    }

    // Obtém o usuário usando o Clerk
    const user = await clerkClient().users.getUser(userId);

    // Verifica se o usuário possui plano premium
    if (user.publicMetadata?.subscriptionPlan === "premium") {
      return true;
    }

    // Obtém o número de transações do mês atual
    const currentMonthTransactions = await getCurrentMonthTransactions();

    // Verifica se o número de transações atingiu o limite (20 transações)
    if (currentMonthTransactions >= 20) {
      return false;
    }

    return true;
  } catch (error) {
    // Loga o erro caso ocorra
    console.error("Error in canUserAddTransaction:", error);
    throw new Error("Error checking transaction limit");
  }
};
